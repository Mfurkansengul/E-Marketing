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
            variant="outline-success"
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
            variant="outline-success"
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
            variant="outline-success"
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
            variant="outline-success"
            title={`Oto, Bahçe, Yapı Market`}
            className="w-100"
          >
            <Dropdown.Item eventKey="1" href="/products/autoaccessory">Oto Aksesuar</Dropdown.Item>
            <Dropdown.Item eventKey="2" href="/products/allmotorcycle">Tüm Motosiklet Ürünleri</Dropdown.Item>
            <Dropdown.Item eventKey="3" href="/products/garden">Bahçe</Dropdown.Item>
            <Dropdown.Item eventKey="4" href="/products/bath">Banyo</Dropdown.Item>
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
            variant="outline-success"
            title={`Anne, Bebek, Oyuncak`}
            className="w-100"
          >
            <Dropdown.Item eventKey="1">Anne Bebek Ürünleri</Dropdown.Item>
            <Dropdown.Item eventKey="2">Oyuncuklar</Dropdown.Item>
            <Dropdown.Item eventKey="3">Araç & Gereç</Dropdown.Item>
            <Dropdown.Item eventKey="4">Emzirme & Bebek Beslenme</Dropdown.Item>
            <Dropdown.Item eventKey="5">bebek Odası & Güvenlik</Dropdown.Item>
            <Dropdown.Item eventKey="6">
              Bebek Bezi & Islak Mendil
            </Dropdown.Item>
            <Dropdown.Item eventKey="7">
              Bebek Bakım & Banyo & Sağlık
            </Dropdown.Item>
            <Dropdown.Item eventKey="8">Giyim</Dropdown.Item>
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
            variant="outline-success"
            title={` Spor, Outdoor `}
            className="w-100"
          >
            <Dropdown.Item eventKey="1">Tüm Spor Ürünleri</Dropdown.Item>
            <Dropdown.Item eventKey="2">Tüm Outdoor Ürünleri</Dropdown.Item>
            <Dropdown.Item eventKey="3">Spor-Ayakkabı</Dropdown.Item>
            <Dropdown.Item eventKey="4">Outdoor-Ayakkabı</Dropdown.Item>
            <Dropdown.Item eventKey="5">Fitness-Kondisyon</Dropdown.Item>
            <Dropdown.Item eventKey="6">
              Elektrikli Scooter-Paten-Kaykay
            </Dropdown.Item>
            <Dropdown.Item eventKey="7">Spor Branşları</Dropdown.Item>
            <Dropdown.Item eventKey="8">Bisiklet</Dropdown.Item>
            <Dropdown.Item eventKey="9">Taraftar Ürünleri</Dropdown.Item>
            <Dropdown.Item eventKey="10">
              Kamp & Kampçılık Malzemeleri
            </Dropdown.Item>
            <Dropdown.Item eventKey="11">Şişme Su Ürünleri</Dropdown.Item>
            <Dropdown.Item eventKey="12">Balıkçılık Avcılık</Dropdown.Item>
            <Dropdown.Item eventKey="13">Aksiyon Kamera</Dropdown.Item>
            <Dropdown.Item eventKey="14">
              Outdoor Elektirik & Optik
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
            variant="outline-success"
            title={`Kozmetik, Kişisel Bakım`}
            className="w-100"
          >
            <Dropdown.Item eventKey="1">Kozmetik</Dropdown.Item>
            <Dropdown.Item eventKey="2">Parfüm</Dropdown.Item>
            <Dropdown.Item eventKey="3">Makyaj</Dropdown.Item>
            <Dropdown.Item eventKey="4">Cilt Bakımı</Dropdown.Item>
            <Dropdown.Item eventKey="5">Güneş Bakımı</Dropdown.Item>
            <Dropdown.Item eventKey="6">Kişisel Bakım</Dropdown.Item>
            <Dropdown.Item eventKey="7">Ağız Bakım</Dropdown.Item>
            <Dropdown.Item eventKey="8">Traş Ürünleri</Dropdown.Item>
            <Dropdown.Item eventKey="9">Duş Jel</Dropdown.Item>
            <Dropdown.Item eventKey="10">Saç Bakım</Dropdown.Item>
            <Dropdown.Item eventKey="11">Epilasyon & Ağda</Dropdown.Item>
            <Dropdown.Item eventKey="12">
              Aile Planlaması Ve Cinsel Sağlık
            </Dropdown.Item>
            <Dropdown.Item eventKey="13">Deodorant</Dropdown.Item>
            <Dropdown.Item eventKey="14">Sıvı Sabun</Dropdown.Item>
            <Dropdown.Item eventKey="15">Kolonya</Dropdown.Item>
            <Dropdown.Item eventKey="16">El Dezenfektanı</Dropdown.Item>
            <Dropdown.Item eventKey="17">Maske & Eldiven</Dropdown.Item>
            <Dropdown.Item eventKey="18">besin Tavsiyeleri</Dropdown.Item>
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
            variant="outline-success"
            title={`Süper Market, Pet Shop`}
            className="w-100"
          >
            <Dropdown.Item eventKey="1">Süper Market Anasayfa</Dropdown.Item>
            <Dropdown.Item eventKey="2">
              Deterjan & Temzilik Ürünleri
            </Dropdown.Item>
            <Dropdown.Item eventKey="3">
              Bebek Bezleri Ve Islak Mendil
            </Dropdown.Item>
            <Dropdown.Item eventKey="4">Kağıt Ürünleri</Dropdown.Item>
            <Dropdown.Item eventKey="5">İçecekler</Dropdown.Item>
            <Dropdown.Item eventKey="6">Gıda Ürünleri</Dropdown.Item>
            <Dropdown.Item eventKey="7">Pet Shop</Dropdown.Item>
            <Dropdown.Item eventKey="8">Ev Tüketim Malzemeleri</Dropdown.Item>
            <Dropdown.Item eventKey="9">Ofis Tüketim Malzemeleri</Dropdown.Item>
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
            variant="outline-success"
            title={`Kitap, Müzik, Film, Hobi`}
            className="w-100"
          >
            <Dropdown.Item eventKey="1">Kitap & Dergi</Dropdown.Item>
            <Dropdown.Item eventKey="2">
              Müzik Enstrümanları Ve Ekipmanları
            </Dropdown.Item>
            <Dropdown.Item eventKey="3">Drone Multikopter</Dropdown.Item>
            <Dropdown.Item eventKey="4">Hobi & Oyun</Dropdown.Item>
            <Dropdown.Item eventKey="5">Film</Dropdown.Item>
            <Dropdown.Item eventKey="6">Dijital Ürünler</Dropdown.Item>
          </DropdownButton>
        ))}
      </div>
    </div>
  );
}

export default AllCategories;
