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
import autoaccessory from "../Database/Filters/Oto, Bahçe, Yapı Market/Otoaksesuar.json";
import allmotorcycle from "../Database/Filters/Oto, Bahçe, Yapı Market/tümmotorürünleri.json";
import garden from "../Database/Filters/Oto, Bahçe, Yapı Market/Bahce.json";
import bathroom from "../Database/Filters/Oto, Bahçe, Yapı Market/Banyo.json";
import electrik from "../Database/Filters/Oto, Bahçe, Yapı Market/ElektrikTesisat.json";
import construction from "../Database/Filters/Oto, Bahçe, Yapı Market/YapıMarket.json";
import worksafety from "../Database/Filters/Oto, Bahçe, Yapı Market/IşGüvenligi.json";
import baby from "../Database/Filters/Anne, Bebek, Oyuncak/Annebebekürünleri.json";
import toys from "../Database/Filters/Anne, Bebek, Oyuncak/oyuncaklar.json";
import lactation from "../Database/Filters/Anne, Bebek, Oyuncak/Emzirmebeslenme.json";
import babyroom from "../Database/Filters/Anne, Bebek, Oyuncak/Bebekodasivegüvenlik.json";
import diaper from "../Database/Filters/Anne, Bebek, Oyuncak/BebekBezi.json";
import babycare from "../Database/Filters/Anne, Bebek, Oyuncak/BebekBakım.json";
import allsports from "../Database/Filters/Spor, Outdoor/TümSporÜrünleri.json";

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
    case "autoaccessory":
      return autoaccessory;
    case "allmotorcycle":
      return allmotorcycle;
    case "garden":
      return garden;
    case "bathroom":
      return bathroom;
    case "electrik":
      return electrik;
    case "construction":
      return construction;
    case "worksafety":
      return worksafety;
    case "baby":
      return baby;
    case "toys":
      return toys;
    case "lactation":
      return lactation;
    case "babyroom":
      return babyroom;
    case "diaper":
      return diaper;
    case "babycare":
      return babycare;
      case "allsports":
        return allsports;
    default:
      return common;
  }
}
