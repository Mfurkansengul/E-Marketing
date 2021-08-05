import appliances from "../Database/Filters/Elektronik/Beyazeşya.json";
import computer from "../Database/Filters/Elektronik/Bilgisayar-tablet.json";
import kitchen from "../Database/Filters/Elektronik/ElektrikliEvAletleri.json";
import cam from "../Database/Filters/Elektronik/FotoKamera.json";
import ac from "../Database/Filters/Elektronik/KlimaVeIsiticilar.json";
import games from "../Database/Filters/Elektronik/Oyun-OyunKonsollari.json";
import phone from "../Database/Filters/Elektronik/Telefon-Aksesuar.json";
import tv from "../Database/Filters/Elektronik/Tv-Gorurntu-SesSistemleri.json";
import printer from "../Database/Filters/Elektronik/Yazicilar-Projeksiyon.json";
import women from "../Database/Filters/Moda/Kadın.json";
import men from "../Database/Filters/Moda/Erkek.json";
import gold from "../Database/Filters/Moda/Altın.json";
import outdoor from "../Database/Filters/Moda/Outdoorgiyim-ayakkabı.json";
import kids from "../Database/Filters/Moda/Cocuk.json";
import table from "../Database/Filters/Ev, Yaşam, Kırtasiye/SofraMutfak.json";
import household from "../Database/Filters/Ev, Yaşam, Kırtasiye/EvGerecleri.json";
import furniture from "../Database/Filters/Ev, Yaşam, Kırtasiye/Mobilya.json";
import lighting from "../Database/Filters/Ev, Yaşam, Kırtasiye/Aydinlatma.json";
import hometextile from "../Database/Filters/Ev, Yaşam, Kırtasiye/EvTekstil.json";
import decoration from "../Database/Filters/Ev, Yaşam, Kırtasiye/EvDekorasyan.json";
import bed from "../Database/Filters/Ev, Yaşam, Kırtasiye/Yatak.json";
import officefurniture from "../Database/Filters/Ev, Yaşam, Kırtasiye/OfisMobilyalari.json";
import officestationery from "../Database/Filters/Ev, Yaşam, Kırtasiye/OfisKırtasiye.json";
import bath from "../Database/Filters/Ev, Yaşam, Kırtasiye/Banyo.json";

import common from "../Database/Filters/CommonFilters.json";

export default function SwitchFilter(props) {
  switch (props) {
    case "appliances":
      return appliances;
    case "computer":
      return computer;
    case "kitchen":
      return kitchen;
    case "cam":
      return cam;
    case "ac":
      return ac;
    case "games":
      return games;
    case "phone":
      return phone;
    case "tv":
      return tv;
    case "printer":
      return printer;
    case "women":
      return women;
    case "men":
      return men;
    case "gold":
      return gold;
    case "outdoor":
      return outdoor;
    case "kids":
      return kids;
    case "table":
      return table;
    case "household":
      return household;
    case "furniture":
      return furniture;
    case "lighting":
      return lighting;
    case "hometextile":
      return hometextile;
    case "decoration":
      return decoration;
    case "bed":
      return bed;
    case "officefurniture":
      return officefurniture;
    case "officestationery":
      return officestationery;
    case "bath":
      return bath;
      default:
      return common;
  }
}