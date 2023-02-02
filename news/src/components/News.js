import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  articles = [
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Suspects arrested over Pakistan mosque blast, police focus on how bomber got in - Reuters",
      description:
        "Police investigating a suicide bombing that killed more than 100 people at a Pakistan mosque said on Tuesday that several people had been arrested, and they could not rule out the possibility that the bomber had internal assistance evading security checks.",
      url: "https://www.reuters.com/world/asia-pacific/death-toll-pakistan-mosque-blast-rises-83-hospital-spokesperson-2023-01-31/",
      urlToImage:
        "https://www.reuters.com/resizer/-0cRmQfXYCqyL_V6VAY9bOS7PHU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2G67MQA2XVMVXKXDM4VTM37JDY.jpg",
      publishedAt: "2023-02-01T09:44:00Z",
      content:
        "PESHAWAR, Pakistan, Feb 1 (Reuters) - Police investigating a suicide bombing that killed more than 100 people at a Pakistan mosque said on Tuesday that several people had been arrested, and they coul… [+2629 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Elizabeth Wolfe, Paradise Afshar, Tina Burnside",
      title:
        "Report: Man accused of kidnapping, torturing Oregon woman dies from self-inflicted gunshot wound following police standoff - CNN",
      description:
        "A week after authorities discovered a woman bound and beaten in a southwest Oregon home, the kidnapping suspect has died from a self-inflicted gunshot wound, a CNN affiliate reports.",
      url: "https://www.cnn.com/2023/02/01/us/oregon-kidnapping-suspect-benjamin-foster-dead-wednesday/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230201090149-grants-pass-standoff-013123.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-02-01T09:19:00Z",
      content:
        "A week after authorities discovered a woman bound and beaten in a southwest Oregon home, the kidnapping suspect has died from a self-inflicted gunshot wound, a CNN affiliate reports. \r\nBenjamin Obadi… [+3443 chars]",
    },
    {
      source: {
        id: null,
        name: "TMZ",
      },
      author: "TMZ Staff",
      title:
        "Olivia Wilde, Jason Sudeikis Fighting Over Child Support Issues - TMZ",
      description:
        "Olivia Wilde and Jason Sudeikis may have been hugging recently, but not because they've resolved their conflicts -- TMZ's learned there's a dogfight over how child support will be handled.",
      url: "https://www.tmz.com/2023/02/01/olivia-wilde-jason-sudeikis-child-support-child-custody-battle-court-la-new-york/",
      urlToImage:
        "https://imagez.tmz.com/image/2d/16by9/2023/01/31/2d56637643e7448a907a3d588dfc1ee8_xl.jpg",
      publishedAt: "2023-02-01T09:00:00Z",
      content:
        "Olivia Wilde and Jason Sudeikis may have been hugging recently, but not because they've resolved their conflicts -- TMZ's learned there's a dogfight over how child support will be handled.\r\nSources w… [+1353 chars]",
    },
    {
      source: {
        id: null,
        name: "The Times of Israel",
      },
      author: null,
      title:
        "Netanyahu says he wants to hear ‘counter offers’ to proposed judicial overhaul - The Times of Israel",
      description:
        "In wide-ranging CNN interview, PM insists radical changes will 'correct' Israeli democracy, vows to thwart Iran, says he's 'looking into' giving Ukraine 'other kinds of aid'",
      url: "https://www.timesofisrael.com/netanyahu-says-he-wants-to-hear-counteroffers-to-proposed-judicial-overhaul/",
      urlToImage:
        "https://static.timesofisrael.com/www/uploads/2023/02/Screenshot-2023-01-31-at-10.02.50-PM-e1675224422536-1024x640.png",
      publishedAt: "2023-02-01T07:38:44Z",
      content:
        "Prime Minister Benjamin Netanyahu said Tuesday that he is ready to “hear counter offers” to his contentious plan to radically overhaul Israel’s independent judiciary, while still defending the propos… [+15319 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title: "Missing radioactive capsule found in Western Australia - Reuters",
      description:
        "Australian authorities on Wednesday found a radioactive capsule that was lost in the vast Outback after nearly a week-long search along a 1,400 km (870-mile) stretch of highway, an emergency services official said.",
      url: "https://www.reuters.com/world/asia-pacific/missing-radioactive-capsule-found-western-australia-2023-02-01/",
      urlToImage:
        "https://www.reuters.com/resizer/jLpDC6pN9jDQg6kRIJuIQe8a4eI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6TLJGQ7KWVOLVDAFWGVUP23ANU.jpg",
      publishedAt: "2023-02-01T07:13:00Z",
      content:
        "SYDNEY, Feb 1 (Reuters) - Australian authorities on Wednesday found a radioactive capsule that was lost in the vast Outback after nearly a week-long search along a 1,400 km (870-mile) stretch of high… [+1665 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Adani Group stocks rout deepens to $72 billion despite share sale completion - Reuters",
      description:
        "Most Adani Group stocks dropped on Wednesday, extending losses to $72 billion after a short-seller report criticised the conglomerate and despite the group completing a closely watched share sale a day earlier.",
      url: "https://www.reuters.com/business/adani-group-stocks-resume-fall-after-25-bln-share-sale-goes-through-2023-02-01/",
      urlToImage:
        "https://www.reuters.com/resizer/JdNNuQGag_MApH8DGqQNG-DS4FY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SLC2FQMIZVJZNNCICPG5ESHEU4.jpg",
      publishedAt: "2023-02-01T05:10:00Z",
      content:
        "BENGALURU, Feb 1 (Reuters) - Most Adani Group stocks dropped on Wednesday, extending losses to $72 billion after a short-seller report criticised the conglomerate and despite the group completing a c… [+1965 chars]",
    },
    {
      source: {
        id: "axios",
        name: "Axios",
      },
      author: "Andrew Freedman",
      title:
        "2 dead as ice storm slams souther U.S. from Dallas to Memphis - Axios",
      description:
        "The storm is sending repeated waves of sleet, freezing rain and snow surging northeast from Texas.",
      url: "https://www.axios.com/2023/01/31/treacherous-ice-storm-delays-texas-to-kentucky",
      urlToImage:
        "https://images.axios.com/dVf1JJYsLNnW7UEaHJW4WFNVhlA=/0x51:1920x1131/1366x768/2023/01/31/1675190531402.jpg",
      publishedAt: "2023-02-01T04:07:31Z",
      content:
        "The combination of moisture from the Gulf of Mexico and Arctic air spilling south from Canada is resulting in a long-duration ice storm for millions of people, across at least eight states. \r\nThe big… [+4162 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Dan Lamothe",
      title:
        "Biden's 'no' on F-16s for Ukraine met with skepticism in Pentagon - The Washington Post",
      description:
        "The administration has exhibited a pattern of rejecting similar pleas from the government in Kyiv only to relent later.",
      url: "https://www.washingtonpost.com/national-security/2023/01/31/ukraine-f16-biden/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CZ2NGFJDUS26EA4YVTJ4UCOOTI.JPG&w=1440",
      publishedAt: "2023-02-01T03:40:00Z",
      content:
        "Comment on this story\r\nPresident Bidens brusque refusal to fulfill Ukraines request for F-16 jets has been greeted with skepticism at the Pentagon, where some officials, citing the administrations pa… [+5884 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Edward Segarra, USA TODAY",
      title:
        "Dr. Phil is ending his long-running talk show after 21 seasons - USA TODAY",
      description:
        "Dr. Phil McGraw is walking away from his \"Dr. Phil' talk show after 21 seasons to pursue other projects.",
      url: "https://www.usatoday.com/story/entertainment/tv/2023/01/31/dr-phil-ending-talk-show-after-21-seasons/11158263002/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2023/02/01/USAT/674ea669-ca7e-4183-afab-84bed1638254-GTY_1144856826.JPG?auto=webp&crop=2398,1349,x0,y600&format=pjpg&width=1200",
      publishedAt: "2023-02-01T03:38:32Z",
      content:
        "Dr. Phil McGraw is calling it quits on his eponymous daytime talk show after more than two decades on the air.\r\nMcGraw, who holds a doctorate in clinical psychology, said in a statement that while th… [+2691 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/everything?q=apple&from=2023-02-01&to=2023-02-01&sortBy=popularity&apiKey=d9484ba0267746dfba9de285f6c426bb";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp - Top News Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{ 
          return <div className="col-md-4" key={element.url}>
            <NewsItems title={element.title.slice(0,45)} description={element.description.slice(0,80)} imageurl={element.urlToImage} newsurl={element.url}/>
          </div>
        })}
        </div>
      </div>
    );
  }
}

export default News;
