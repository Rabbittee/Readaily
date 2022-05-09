import json
from os import path, mkdir
from datetime import datetime, timezone, timedelta

import requests
from bs4 import BeautifulSoup as bs

host = "https://www.bbc.com"


class BBC:
    def __init__(self, url: str):
        article = requests.get(url)
        self.soup = bs(article.content, "html.parser").find(id="main-content")

        self.link = url
        self.category = " & ".join(url.split("/")[-1].split("-")[:-1])
        self.title = self.get_title()
        self.contributor = self.get_contributor()
        self.time = self.get_time()
        self.cover = self.get_cover()
        self.content = self.get_body()
        self.tags = self.get_related_topics()

    def get_body(self) -> list:
        body = self.soup
        contents = []
        for div in body.select("[data-component]"):
            if div["data-component"] == "text-block":
                if div.find("b") is not None:
                    contents.append({"text": div.find("b").text, "type": "b"})
                else:
                    contents.append({"text": div.find("p").text, "type": "p"})

            elif div["data-component"] == "unordered-list-block":
                sub_content = []
                for li in div.select("li"):
                    if li.find("a") is not None:
                        sub_content.append(
                            {"text": li.text, "type": "a", "href": li.find("a")["href"]}
                        )
                    else:
                        sub_content.append({"text": li.text, "type": "p"})
                contents.append(sub_content)

        return contents

    def get_title(self) -> str:
        return self.soup.find(id="main-heading").text

    def get_contributor(self) -> str:
        contributor = self.soup.select_one("header > p > span > strong")
        if contributor != None:
            return contributor.text.replace("By ", "")
        else:
            return None

    def get_time(self) -> str:
        return self.soup.select_one("header time")["datetime"]

    def get_cover(self) -> str:
        return self.soup.select_one('[data-component="image-block"]').find("img")["src"]

    def get_related_topics(self) -> list:
        tags = self.soup.select_one('[data-component="tag-list"]')
        if tags is not None:
            return [li.text for li in tags.select("li")]
        return []


def mkdir_today(output: str) -> str:
    tz = timezone(timedelta(hours=+8))
    now = datetime.now(tz).isoformat(timespec="seconds")
    y_m = now[:7]
    y_m_d = now[:10]

    if not path.isdir(output):
        mkdir(output)

    curr_path = path.join(output, y_m)
    if not path.isdir(curr_path):
        mkdir(curr_path)

    curr_path = path.join(curr_path, y_m_d)
    if not path.isdir(curr_path):
        mkdir(curr_path)

    return curr_path


def output(parsed: BBC, file_name: str) -> None:
    parsed_dict = parsed.__dict__
    del parsed_dict["soup"]
    json_str = json.dumps(parsed_dict)

    folder = mkdir_today("public/news")
    with open(path.join(folder, f"{file_name}.json"), "wt") as fout:
        fout.write(json_str)


def get_news_list():

    for category in [
        {
            "category": "science_and_environment",
            "keyword": "science-environment-",
            "output": "science",
        },
        {
            "category": "technology",
            "keyword": "technology-",
            "output": "technology",
        },
        {
            "category": "business",
            "keyword": "business-",
            "output": "business",
        },
        {
            "category": "entertainment_and_arts",
            "keyword": "entertainment-arts-",
            "output": "entertainment",
        },
        {
            "category": "health",
            "keyword": "health-",
            "output": "health",
        },
    ]:
        article = requests.get(f"https://www.bbc.com/news/{category['category']}")
        html = bs(article.content, "html.parser")

        news_list = sorted(
            list(
                set(
                    [
                        host + a["href"]
                        for a in html.find(id="topos-component").find_all("a")
                        if category["keyword"] in a["href"]
                        and a["href"].startswith("/news/")
                        and a.find("span") is None
                    ]
                )
            ),
            reverse=True,
        )

        if len(news_list) == 0:
            print(category["category"])
            continue

        print(news_list[0])
        parsed = BBC(news_list[0])
        output(parsed, category["output"])


if __name__ == "__main__":
    get_news_list()
