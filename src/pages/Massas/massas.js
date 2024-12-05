import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Box } from "@mui/material";
import "./styles.css";
import Pizza from "../../assets/margherita.jpg";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
function Massas() {
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const Pizzas = [
    {
      name: "A MODA",
      img: Pizza,
      description:
        "Mussarela, presunto, calabresa, pimentão, cebola, azeitona preta e orégano ",
    },
    {
      name: "PORTUGUESA",
      img: Pizza,
      description: "Mussarela, presunto, calabresa, cebola, ovo e orégano ",
    },
    {
      name: "FRANGO COM CATUPIRY OU CHEDDAR",
      img: Pizza,
      description:
        "Mussarela, frango, alho torrado, catupiry ou cheddar e orégano",
    },
    {
      name: "FRANGO À BOLONHESA",
      img: Pizza,
      description: "Mussarela, frango desfiado, molho bolonhesa e orégano ",
    },
    {
      name: "4 CARNES",
      img: Pizza,
      description: "Mussarela, presunto, calabresa, lombo, bacon e orégano ",
    },
    {
      name: "4 QUEIJOS",
      img: Pizza,
      description: "Mussarela, parmesão, provolone, catupiry",
    },
    {
      name: "LOMBO CANADENSE COM CHEDDAR",
      img: Pizza,
      description: "mussarela, lombo canadense, cheddar e orégano",
    },
    {
      name: "VETEGARIANA",
      img: Pizza,
      description: "Cebola, pimentão, tomate, milho, azeitona e orégano",
    },
    {
      name: "MILHO COM BACON",
      img: Pizza,
      description: "Mussarela, parmesão, milho, bacon e orégano ",
    },
    {
      name: "FRANGO COM BRÓCOLIS",
      img: Pizza,
      description:
        "Mussarela, frango desfiado, alho torrado, brócolis, catupiry e orégano ",
    },
    {
      name: "CAMARÃO ALHO PORÓ E CATUPIRY",
      img: Pizza,
      description:
        "Mussarela, camarão frito no alho, alho poró, catupiry e orégano ",
    },
    {
      name: "CALABRESA",
      img: Pizza,
      description: "Mussarela, cebola, calabresa, azeitona preta e orégano ",
    },
    {
      name: "PRESUNTO",
      img: Pizza,
      description: "Mussarela, presunto e orégano ",
    },
    {
      name: "MUSSARELA",
      img: Pizza,
      description: "Mussarela, molho ao sugo e orégano",
    },
    {
      name: "PRESUNTO À BOLONHESA",
      img: Pizza,
      description:
        "Mussarela, molho ao sugo, palmito, molho bolonhesa e orégano",
    },
    {
      name: "MARGHERITA",
      img: Pizza,
      description: "Mussarela, parmesão, tomate, manjericão e orégano ",
    },
    {
      name: "CARNE DE SOL MUSSARELA E CEBOLINHA",
      img: Pizza,
      description: "Mussarela, carne de sol, cebolinha, catupiry e orégano ",
    },
    {
      name: "ABAXAXI COM PROVOLONE E MUSSARELA",
      img: Pizza,
      description: "Mussarela, provolone e molho ao sugo",
    },
    {
      name: "PEPPERONI",
      img: Pizza,
      description: "Mussarela, catupiry, peperoni e orégano ",
    },
    {
      name: "RÚCULA COM TOMATE SECO",
      img: Pizza,
      description: "Mussarela, parmesão, tomate seco, rúcula e orégano ",
    },
    {
      name: "SATANGOS",
      img: Pizza,
      description:
        "Mussarela, tomate, presunto, calabresa, pimentão, cebola, azeitona, pimenta Carolina reaper e orégano",
    },
  ];

  const Macarroes = [
    {
      name: "Macarrão ao sugo",
      description: "Penne com molho de tomate e mussarela gratinada",
      img: Pizza,
    },
    {
      name: "Macarrão à bolonhesa",
      description: "Penne com molho à bolonhesa e mussarela gratinada",
      img: Pizza,
    },
  ];

  const Lasanhas = [
    {
      name: "Lasanha à bolonhesa",
      img: Pizza,
      description: "Lasanha à bolonhesa",
    },
  ];
  return (
    <Container sx={{ zIndex: "2" }}>
      <h1 className="title">Massas</h1>
      <Divider sx={{ bgcolor: "white" }} />
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Pizza" className="tab" {...a11yProps(0)}></Tab>
        <Tab label="Macarrão" className="tab" {...a11yProps(1)} />
        <Tab label="Lasanha" className="tab" {...a11yProps(2)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <div className="container">
          <div className="notes">
            <p style={{ color: "white" }}>
              Todas as pizzas podem ter acréscimo ou borda de catupiry ou
              cheddar
            </p>
            <p style={{ color: "white" }}>
              Tamanhos: Grande(6 fatias) e Família(8 fatias)
            </p>
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
          </div>
          {Pizzas.map((item) => {
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
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="container">
          <div className="notes">
            <p style={{ color: "white" }}>
              Todos as massas em tamanhos pequeno, médio e grande
            </p>
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
          </div>
          {Macarroes.map((item) => {
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
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="container">
          <div className="notes">
            <p style={{ color: "white" }}>
              Todos as massas em tamanhos pequeno, médio e grande
            </p>
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
          </div>

          {Lasanhas.map((item) => {
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
      </CustomTabPanel>
    </Container>
  );
}

export default Massas;
