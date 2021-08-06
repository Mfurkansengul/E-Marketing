import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";

function AllCategories() {
  return (
    <div className="AllCategories">
      <div className="mb-2">
        {["right"].map((direction) => (
          <DropdownButton
            as={ButtonGroup}
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="success"
            title={`Elektronik`}
            className="w-100"
          >
            <Dropdown.Item eventKey="1" href="/products/computer">
              Bilgisayar / Tablet
            </Dropdown.Item>
            <Dropdown.Item eventKey="2" href="/products/printer">
              Yazıcılar & Projeksiyon
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" href="/products/phone">
              Telefon & Telefon Aksesuarları
            </Dropdown.Item>
            <Dropdown.Item eventKey="4" href="/products/tv">
              Tv, Görüntü & Ses Sistemleri
            </Dropdown.Item>
            <Dropdown.Item eventKey="5" href="/products/appliances">
              Beyaz Eşya
            </Dropdown.Item>
            <Dropdown.Item eventKey="6" href="/products/ac">
              Klima Ve Isıtıcalar
            </Dropdown.Item>
            <Dropdown.Item eventKey="7" href="/products/kitchen">
              Elektrik Ev Aletleri
            </Dropdown.Item>
            <Dropdown.Item eventKey="8" href="/products/cam">
              Foto & Kamera
            </Dropdown.Item>
            <Dropdown.Item eventKey="9" href="/products/games">
              Oyun & Oyun Konsoları
            </Dropdown.Item>
          </DropdownButton>
        ))}
      </div>
      <div className="mb-2">
        {["right"].map((direction) => (
          <DropdownButton
            as={ButtonGroup}
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="success"
            title={`Moda`}
            className="w-100"
          >
            <Dropdown.Item eventKey="1" href="/products/women">Kadın</Dropdown.Item>
            <Dropdown.Item eventKey="2" href="/products/men">Erkek</Dropdown.Item>
            <Dropdown.Item eventKey="3" href="/products/gold">Altın</Dropdown.Item>
            <Dropdown.Item eventKey="4" href="/products/outdoor">Outdoor Giyim & Ayakkabı</Dropdown.Item>
            <Dropdown.Item eventKey="5" href="/products/kids">Çocuk</Dropdown.Item>
          </DropdownButton>
        ))}
      </div>
      <div className="mb-2">
        {["right"].map((direction) => (
          <DropdownButton
            as={ButtonGroup}
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="success"
            title={`Ev, Yaşam, Kırtasiye`}
            className="w-100"
          >
            <Dropdown.Item eventKey="1" href="/products/table">Sofra & Mutfak</Dropdown.Item>
            <Dropdown.Item eventKey="2" href="/products/household">
              Ev Gereçleri & Ütü Masası
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" href="/products/furniture">Mobilya</Dropdown.Item>
            <Dropdown.Item eventKey="4" href="/products/lighting">Aydınlatma</Dropdown.Item>
            <Dropdown.Item eventKey="5" href="/products/hometextile">Ev Tekstil</Dropdown.Item>
            <Dropdown.Item eventKey="6" href="/products/decoration">Ev Dekorasyan</Dropdown.Item>
            <Dropdown.Item eventKey="7" href="/products/bed">Yatak</Dropdown.Item>
            <Dropdown.Item eventKey="8" href="/products/officefurniture">Ofis Mobilyaları</Dropdown.Item>
            <Dropdown.Item eventKey="9" href="/products/officestationery">Ofis / Kırtasiye</Dropdown.Item>
            <Dropdown.Item eventKey="10" href="/products/bath">Banyo</Dropdown.Item>
          </DropdownButton>
        ))}
      </div>
      <div className="mb-2">
        {["right"].map((direction) => (
          <DropdownButton
            as={ButtonGroup}
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="success"
            title={`Oto, Bahçe, Yapı Market`}
            className="w-100"
          >
            <Dropdown.Item eventKey="1" href="/products/autoaccessory">Oto Aksesuar</Dropdown.Item>
            <Dropdown.Item eventKey="2" href="/products/allmotorcycle">Tüm Motosiklet Ürünleri</Dropdown.Item>
            <Dropdown.Item eventKey="3" href="/products/garden">Bahçe</Dropdown.Item>
            <Dropdown.Item eventKey="4" href="/products/bathroom">Banyo</Dropdown.Item>
            <Dropdown.Item eventKey="5" href="/products/electrik">Eletrik & Tesisat</Dropdown.Item>
            <Dropdown.Item eventKey="6" href="/products/construction">Yapı Market</Dropdown.Item>
            <Dropdown.Item eventKey="7" href="/products/worksafety">İş Güvenliği</Dropdown.Item>
          </DropdownButton>
        ))}
      </div>
      <div className="mb-2">
        {["right"].map((direction) => (
          <DropdownButton
            as={ButtonGroup}
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="success"
            title={`Anne, Bebek, Oyuncak`}
            className="w-100"
          >
            <Dropdown.Item eventKey="1" href="/products/baby" >Anne Bebek Ürünleri</Dropdown.Item>
            <Dropdown.Item eventKey="2" href="/products/toys">Oyuncuklar</Dropdown.Item>
            <Dropdown.Item eventKey="3" href="/products/lactation">Emzirme & Bebek Beslenme</Dropdown.Item>
            <Dropdown.Item eventKey="4" href="/products/babyroom">Bebek Odası & Güvenlik</Dropdown.Item>
            <Dropdown.Item eventKey="5" href="/products/diaper">
              Bebek Bezi & Islak Mendil
            </Dropdown.Item>
            <Dropdown.Item eventKey="6" href="/products/babycare">
              Bebek Bakım & Banyo & Sağlık
            </Dropdown.Item>
          </DropdownButton>
        ))}
      </div>
      <div className="mb-2">
        {["right"].map((direction) => (
          <DropdownButton
            as={ButtonGroup}
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="success"
            title={` Spor, Outdoor `}
            className="w-100"
          >
            <Dropdown.Item eventKey="1" href="/products/allsports">Tüm Spor Ürünleri</Dropdown.Item>
            <Dropdown.Item eventKey="2" href="/products/alloutdoor">Tüm Outdoor Ürünleri</Dropdown.Item>
            <Dropdown.Item eventKey="3" href="/products/sportswearshoes">Spor-Ayakkabı</Dropdown.Item>
            <Dropdown.Item eventKey="4" href="/products/outdoorshoes">Outdoor-Ayakkabı</Dropdown.Item>
            <Dropdown.Item eventKey="5" href="/products/fitnesscondition">Fitness-Kondisyon</Dropdown.Item>
            <Dropdown.Item eventKey="6" href="/products/scooterpaten">
              Elektrikli Scooter-Paten-Kaykay
            </Dropdown.Item>
            <Dropdown.Item eventKey="7" href="/products/sportsbranches">Spor Branşları</Dropdown.Item>
            <Dropdown.Item eventKey="8" href="/products/bycyle">Bisiklet</Dropdown.Item>
            <Dropdown.Item eventKey="9" href="/products/fanproducts">Taraftar Ürünleri</Dropdown.Item>
            <Dropdown.Item eventKey="10" href="/products/campingtools">
              Kamp & Kampçılık Malzemeleri
            </Dropdown.Item>
            <Dropdown.Item eventKey="11" href="/products/waterproducts">Şişme Su Ürünleri</Dropdown.Item>
            <Dropdown.Item eventKey="12" href="/products/fishinggear">Balıkçılık Avcılık</Dropdown.Item>
            <Dropdown.Item eventKey="13" href="/products/actioncamera">Aksiyon Kamera</Dropdown.Item>
          </DropdownButton>
        ))}
      </div>
      <div className="mb-2">
        {["right"].map((direction) => (
          <DropdownButton
            as={ButtonGroup}
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="success"
            title={`Kozmetik, Kişisel Bakım`}
            className="w-100"
          >
            <Dropdown.Item eventKey="1" href="/products/cosmetic">Kozmetik</Dropdown.Item>
            <Dropdown.Item eventKey="2" href="/products/perfume">Parfüm</Dropdown.Item>
            <Dropdown.Item eventKey="3" href="/products/makeup">Makyaj</Dropdown.Item>
            <Dropdown.Item eventKey="4" href="/products/skincare">Cilt Bakımı</Dropdown.Item>
            <Dropdown.Item eventKey="5" href="/products/suncare">Güneş Bakımı</Dropdown.Item>
            <Dropdown.Item eventKey="6" href="/products/personalcare">Kişisel Bakım</Dropdown.Item>
            <Dropdown.Item eventKey="7" href="/products/oralcare">Ağız Bakım</Dropdown.Item>
            <Dropdown.Item eventKey="8" href="/products/shavingproducts">Traş Ürünleri</Dropdown.Item>
          </DropdownButton>
        ))}
      </div>
      <div className="mb-2">
        {["right"].map((direction) => (
          <DropdownButton
            as={ButtonGroup}
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="success"
            title={`Süper Market, Pet Shop`}
            className="w-100"
          >
            <Dropdown.Item eventKey="1" href="/products/supermarkethomepage">Süper Market Anasayfa</Dropdown.Item>
            <Dropdown.Item eventKey="2" href="/products/detergentcleaning">
              Deterjan & Temzilik Ürünleri
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" href="/products/diaperswetwipes">
              Bebek Bezleri Ve Islak Mendil
            </Dropdown.Item>
            <Dropdown.Item eventKey="4" href="/products/paperproducts">Kağıt Ürünleri</Dropdown.Item>
            <Dropdown.Item eventKey="5" href="/products/beverages">İçecekler</Dropdown.Item>
            <Dropdown.Item eventKey="6" href="/products/foodproducts">Gıda Ürünleri</Dropdown.Item>
            <Dropdown.Item eventKey="7" href="/products/petshop">Pet Shop</Dropdown.Item>
            <Dropdown.Item eventKey="8" href="/products/householdconsumables">Ev Tüketim Malzemeleri</Dropdown.Item>
            <Dropdown.Item eventKey="9" href="/products/officeconsumables">Ofis Tüketim Malzemeleri</Dropdown.Item>
          </DropdownButton>
        ))}
      </div>
      <div className="mb-2">
        {["right"].map((direction) => (
          <DropdownButton
            as={ButtonGroup}
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="success"
            title={`Kitap, Müzik, Film, Hobi`}
            className="w-100"
          >
            <Dropdown.Item eventKey="1" href="/products/bookmagazine">Kitap & Dergi</Dropdown.Item>
            <Dropdown.Item eventKey="2" href="/products/musicainstrumentsmaterials">
              Müzik Enstrümanları Ve Ekipmanları
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" href="/products/dronemultikopter">Drone Multikopter</Dropdown.Item>
            <Dropdown.Item eventKey="4" href="/products/hobbygame">Hobi & Oyun</Dropdown.Item>
            <Dropdown.Item eventKey="5" href="/products/film">Film</Dropdown.Item>
            <Dropdown.Item eventKey="6" href="/products/digitalproducts">Dijital Ürünler</Dropdown.Item>
          </DropdownButton>
        ))}
      </div>
    </div>
  );
}

export default AllCategories;
