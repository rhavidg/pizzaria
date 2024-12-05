import React from "react";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Pizza from "../../assets/margherita.jpg";
import { Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Hamburguers() {
  const Hamburguers = [
    {
      name: "X tudo (Superman)",
      description:
        "Hamburguer 150g, queijo, bacon, ovo, presunto, calabresa, milho, batata palha, alface, tomate",
      img: Pizza,
    },
    {
      name: "X bacon (Flash)",
      description:
        "Hamburguer 100g, queijo, bacon, presunto, milho, alface, tomate, batata palha",
      img: Pizza,
    },
    {
      name: "X Vegetariano ( Hulk )",
      description:
        "Hamburguer de soja 100g, queijo, ovo, milho, alface, tomate, batata palha",
      img: Pizza,
    },
    {
      name: "X salada ( Mulher Maravilha )",
      description:
        "Hamburguer 100g, queijo, milho, alface, tomate, batata palha",
      img: Pizza,
    },
    {
      name: "X Tropical ( Robin )",
      description:
        "Hamburguer 100g, queijo, presunto, abacaxi, alface, tomate, batata palha",
      img: Pizza,
    },
    {
      name: "X Satangôs",
      description:
        "Hamburguer 100g, queijo, presunto, bacon, molho de carolina reaper(pimenta), milho, alface, tomate, batata palha",
      img: Pizza,
    },
  ];

  return (
    <Container sx={{ zIndex: "2" }}>
      <h1 className="title">Hamburgueres</h1>
      <Divider sx={{ bgcolor: "white" }} />
      <div className="container">
        <Box
          sx={{
            width: "100%",
            bgcolor: "transparent",
            borderRadius: "15px",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="button"
              className="btn-whatsapp"
              style={{ border: "transparent" }}
              onClick={() => window.open("https://wa.me/3191641236")}
            >
              Peça agora no WhatsApp <WhatsAppIcon />
            </button>
          </div>
        </Box>
        {Hamburguers &&
          Hamburguers.map((item) => {
            return (
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                  zIndex: "2",
                  borderRadius: "15px",
                  padding: "10px",
                  width: "380px",
                  height: "380px",
                  flex: "1 0 21%;",
                }}
              >
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "1.3rem",
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </ListItem>
                <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                  <ListItemAvatar>
                    <img src={item.img} alt="" />
                  </ListItemAvatar>
                </ListItem>
                <ListItemText
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  {item.description}
                </ListItemText>
              </List>
            );
          })}
      </div>
    </Container>
  );
}
export default Hamburguers;
