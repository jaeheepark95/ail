"use client";

import { useState, useEffect } from "react";

const datas = [
  // 디엔 북부
  { name: "비명날개", gentime: 15 },
  // 잿빛 성터
  { name: "수상한 마법사", gentime: 15 },
  { name: "어둠 영혼체", gentime: 15 },
  // 오염된 분지
  { name: "난폭한 도살자", gentime: 10 },
  { name: "오염된 껍질벌레", gentime: 10 },
  // 비밀 실험실
  { name: "비밀 피조물", gentime: 10 },
  { name: "마법 인형", gentime: 10 },
  { name: "마법사의 총애", gentime: 10 },
  // 초승달 호수
  { name: "라미아 주술사", gentime: 10 },
  { name: "앙쿠스토", gentime: 10 },
  // 황혼의 구릉지
  { name: "폭주한 타르두스", gentime: 10 },
  { name: "고대 타르두스", gentime: 10 },
  { name: "돌격의 타르두스", gentime: 10 },
  // 울란 협곡
  { name: "사막 골렘", gentime: 10 },
  { name: "알라락", gentime: 10 },
  { name: "고대 거북", gentime: 10 },
  // 수호자의 유적지
  { name: "검은 손아귀", gentime: 10 },
  { name: "유적지 수호자", gentime: 10 },
  { name: "고대 수호자", gentime: 10 },
  // 절규하는 자의 사막
  { name: "검은 쐐기", gentime: 10 },
  { name: "인티캄", gentime: 10 },
  { name: "사막 수호자", gentime: 10 },
];

const monsters = [
  { name: "무뢰배 카이저", respawnTime: 15 },
  { name: "비명날개", respawnTime: 15 },
  { name: "수상한 마법사", respawnTime: 15 },
  { name: "어둠 영혼체", respawnTime: 15 },
  { name: "난폭한 도살자", respawnTime: 10 },
  { name: "오염된 껍질벌레", respawnTime: 10 },
  { name: "비밀 피조물", respawnTime: 10 },
  { name: "마법 인형", respawnTime: 10 },
  { name: "마법사의 총애", respawnTime: 10 },
  { name: "라미아 주술사", respawnTime: 10 },
  { name: "앙쿠스토", respawnTime: 10 },
  { name: "폭주한 타르두스", respawnTime: 10 },
  { name: "고대 타르두스", respawnTime: 10 },
  { name: "돌격의 타르두스", respawnTime: 10 },
  { name: "사막 골렘", respawnTime: 10 },
  { name: "알라락", respawnTime: 10 },
  { name: "고대 거북", respawnTime: 10 },
  { name: "검은 손아귀", respawnTime: 10 },
  { name: "유적지 수호자", respawnTime: 10 },
  { name: "고대 수호자", respawnTime: 10 },
  { name: "검은 쐐기", respawnTime: 10 },
  { name: "인티캄", respawnTime: 10 },
  { name: "사막 수호자", respawnTime: 10 },
];

export default function Home() {
  const [favorites, setFavorites] = useState([]);
  const [respawnTimers, setRespawnTimers] = useState({});

  const handleCheckboxChange = (name) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(name)) {
        return prevFavorites.filter((fav) => fav !== name);
      } else {
        return [...prevFavorites, name];
      }
    });
  };

  const handleMonsterKill = (name) => {
    const monster = monsters.find((mon) => mon.name === name);
    if (monster) {
      const respawnTime = new Date(
        new Date().getTime() + monster.respawnTime * 60000
      );
      setRespawnTimers((prevTimers) => ({
        ...prevTimers,
        [name]: respawnTime,
      }));
    }
  };

  const calculateRemainingTime = (respawnTime) => {
    const now = new Date();
    const remainingTime = respawnTime - now;
    if (remainingTime <= 0) return "생성완료!";
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRespawnTimers((prevTimers) => ({ ...prevTimers }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>즐겨찾기</h1>
      <ul>
        {favorites.map((fav) => (
          <li key={fav}>
            {fav}
            {respawnTimers[fav] && (
              <span> {calculateRemainingTime(respawnTimers[fav])}</span>
            )}
            <button onClick={() => handleMonsterKill(fav)}>Kill</button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <textarea
        name="note"
        id="note"
        style={{ width: "30%", height: "200px" }}
      ></textarea>
      <br />
      <br />
      <h1>네임드 리스트</h1>
      <ul>
        {monsters.map((mon) => (
          <li key={mon.name}>
            <label>
              <input
                type="checkbox"
                checked={favorites.includes(mon.name)}
                onChange={() => handleCheckboxChange(mon.name)}
              />
              {mon.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
