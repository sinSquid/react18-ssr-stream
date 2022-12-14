import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";

import { allRoutes } from "router/routes";

import style from "./index.module.scss";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {(allRoutes[0].children || [])
          .filter((it) => it.path)
          .map((item) => (
            <Button
              key={item.path}
              onClick={() => {
                item.path && navigate(item.path);
              }}
            >
              {item.path}
            </Button>
          ))}
      </div>
      <footer className={style.footer}>footer</footer>
    </>
  );
};
