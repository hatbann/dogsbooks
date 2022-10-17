import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Top from "../components/Top";
import Top2 from "../components/Top2";
import CustomSlider, { TodaysSlider } from "../components/Slider";
import styles from "./css/Home.module.css";

const recommands = [
  {
    uri: "http://www.readersnews.com/news/photo/201707/73990_32707_616.jpg",
    id: 0,
    title: "범인없는 살인의 밤",
  },
  {
    uri:
      "https://img.daily.co.kr/@files/www.daily.co.kr/content_watermark/life/2017/20170504/859b9ec69dcef60de3606fd9eab7e29e.jpg",
    id: 1,
    title: "가면산장 살인사건",
  },
  {
    uri:
      "http://ojsfile.ohmynews.com/STD_IMG_FILE/2020/0418/IE002632888_STD.jpg",
    id: 2,
    title: "산매리 저수지",
  },
  {
    uri:
      "http://image.kyobobook.co.kr/images/book/xlarge/844/x9791158930844.jpg",
    id: 3,
    title: "도플갱어의 섬",
  },
  {
    uri: "https://newsimg.sedaily.com/2019/10/30/1VPQ0XY4RJ_1.jpg",
    id: 4,
    title: "동급생",
  },
];

const todays = [
  {
    uri:
      "http://image.kyobobook.co.kr/images/book/large/348/l9788960907348.jpg",
    title: "애쓰지 않아도",
    content: `사람의 마음은 좀처럼 지치지를 않나봐요. 자꾸만 노력하려 하고, 다가가려 해요. 나에게도 그 마음이 살아 있어요`,
    id: 0,
  },
  {
    uri:
      "http://image.kyobobook.co.kr/images/book/large/994/l9791188469994.jpg",
    title: "당신은 결국 무엇이든 해내는 사람",
    content:
      "흔들리고 떠밀리고 넘어져도 나는, 당신은, 우리는 결국 해낼 것이라는 믿음의 문장들",
    id: 1,
  },
  {
    uri:
      "http://image.kyobobook.co.kr/images/book/large/204/l9791165345204.jpg",
    title: "책들의 부엌",
    content:
      "갓 지은 맛있는 책 냄새가 폴폴 풍기는 여기는 ‘소양리 북스 키친’입니다",
    id: 2,
  },
  {
    uri:
      "http://image.kyobobook.co.kr/images/book/large/096/l9791191891096.jpg",
    title: "나로서 충분히 괜찮은 사람",
    content: "애써 노력하지 않아도 돼. 나는 나로서 충분히 괜찮은 사람이니까",
    id: 3,
  },
  {
    uri:
      "http://image.kyobobook.co.kr/images/book/large/497/l9791165213497.jpg",
    title: "우리는 조구만 존재야 ",
    content: "우리는 조구만 존재야. 조구맣지만 안 중요하단 건 아냐 ",
    id: 4,
  },
];

let booktitle = "";

const Home = ({ userObj }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  let navigate = useNavigate();
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setSearch(value);
  };

  const onSearch = async (e) => {
    try {
      const URL = `https://cors-anywhere.herokuapp.com/http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttblcyeon461605002&Query=${search}&QueryType=Title&MaxResults=3&start=1&Sort=Accuracy&SearchTarget=Book&output=js&Version=20131101`;
      const response = await axios.get(URL);
      const arr = response.data.item;
      arr.map((info) => data.push(info));

      navigate("/search", { state:  {
        data,search
      }});
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.container}>
    <Top2/>
      <Top location={"home"} />
      <div className={styles.bookSearchForm}>
        <form>
          <label htmlFor="bookSearch"></label>
          <input
            type="text"
            id="bookSearch"
            placeholder="도서 검색"
            value={search}
            onChange={onChange}
          />
          <button type="button" id={styles.bookSearchBtn} onClick={onSearch}>
            검색
          </button>
        </form>
      </div>
      <div className={styles.profile}>
        <div
          className={styles.profile_comment}
        >{`프로추리러, ${userObj.displayName}님의 세계`}</div>
        <img

          src={require("../assets/titledog.png")}
          className={styles.profile_img}
        ></img>
        <Link to="/mypage" className={styles.plant}>
          <span>내가 모은 강아지들 보기</span>
        </Link>
      </div>
      <div className={styles.recommands}>
        <span>{`추리를 좋아하는 ${userObj.displayName}님을 위한 추천도서`}</span>
        <CustomSlider contents={recommands} className={styles.slider} />
      </div>
      <div className={styles.todays}>
        <span>오늘의 도서</span>
        <TodaysSlider contents={todays} />
      </div>
    </div>
  );
};

export default Home;