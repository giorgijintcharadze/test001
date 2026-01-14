import React from "react";
import Footer from "./Footer";

const Section = () => {
  const data = [
    {
      name: "giorgi",
      secondname: "jincharadze",
      id: "001001100014",
      dateofbirth: "1994/08/06",
      url: "https://s.yimg.com/zb/imgv1/ff2372e7-81d5-3fd6-8c8d-54b455fed15c/t_500x300",
    },
    {
      name: "gabi",
      secondname: "jafarize",
      id: "001001100014",
      dateofbirth: "1994/08/06",
      url: "https://tse1.mm.bing.net/th/id/OIP.K8OT2R1LczGc7WwMk6b9-AHaE8?pid=Api&P=0&h=220",
    },
    {
      name: "data",
      secondname: "giorgaze",
      id: "001001100014",
      dateofbirth: "1994/08/06",
      url: "https://tse3.mm.bing.net/th/id/OIP.2-09ZL89G3zaOTIuNaXiyQHaEk?pid=Api&P=0&h=220",
    },
    {
      name: "luka",
      secondname: "gorxelashvili",
      id: "001001100014",
      dateofbirth: "1994/08/06",
      url: "https://tse1.mm.bing.net/th/id/OIP.KYAxJV6x42tujbGHpvErCwHaE8?pid=Api&P=0&h=220",
    },
    {
      name: "giorgi",
      secondname: "jincharadze",
      id: "001001100014",
      dateofbirth: "1994/08/06",
      url: "https://tse3.mm.bing.net/th/id/OIP.QIrsG9OCPwhmGzKtN6VVkwHaEK?pid=Api&P=0&h=220",
    },
  ];
  return (
    <div>
      {data.map((eachellement) => (
        <>
          <Footer
            name={eachellement.name}
            secondname={eachellement.secondname}
            img={eachellement.url}
          />
        </>
      ))}
    </div>
  );
};

export default Section;
