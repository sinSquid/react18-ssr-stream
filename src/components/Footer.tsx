import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";

import { allRoutes } from "router/routes";

import style from "./index.module.less";

interface DemoType {
  path?: string | undefined;
}

export const Footer = () => {
  const navigate = useNavigate();
  const allr: DemoType[] = allRoutes[0].children || []
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {allr
          .filter((it) => it.path)
          .map((item) => (
            <Button
              key={item.path}
              onClick={() => {
                if (item.path) {
                  navigate(item.path);
                }
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
