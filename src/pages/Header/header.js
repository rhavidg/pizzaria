import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "./styles.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const pages = [
    { title: "Massas", link: "/massas" },
    { title: "Hamburguers", link: "/hamburguers" },
    { title: "Sobre nós", link: "sobre-nos" },
  ];

  const navigate = useNavigate();

  function redirect(link) {
    return navigate(link);
  }
  return (
    <div>
      <AppBar
        position="static"
        className="menu"
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    zIndex: 2,
                  }}
                  onClick={() => redirect(page.link)}
                >
                  {page.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
