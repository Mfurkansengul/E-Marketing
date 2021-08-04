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
            <Dropdown.Item eventKey="1" href="/products">
              Bilgisayar / Tablet
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">Yazıcılar & Projeksiyon</Dropdown.Item>
            <Dropdown.Item eventKey="3">
              Telefon & Telefon Aksesuarları
            </Dropdown.Item>
            <Dropdown.Item eventKey="4">
              Tv, Görüntü & Ses Sistemleri
            </Dropdown.Item>
            <Dropdown.Item eventKey="5">Beyaz Eşya</Dropdown.Item>
            <Dropdown.Item eventKey="6">Klima Ve Isıtıcalar</Dropdown.Item>
            <Dropdown.Item eventKey="7">Elektrik Ev Aletleri</Dropdown.Item>
            <Dropdown.Item eventKey="8">Foto & Kamera</Dropdown.Item>
            <Dropdown.Item eventKey="9">Oyun & Oyun Konsoları</Dropdown.Item>
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
            <Dropdown.Item eventKey="1">Kadın</Dropdown.Item>
            <Dropdown.Item eventKey="2">Kadın Aksesuar & Takı</Dropdown.Item>
            <Dropdown.Item eventKey="3">Erkek</Dropdown.Item>
            <Dropdown.Item eventKey="4">Erkek Aksesuar & Takı</Dropdown.Item>
            <Dropdown.Item eventKey="5">Altın</Dropdown.Item>
            <Dropdown.Item eventKey="6">Outdoor Giyim & Ayakkabı</Dropdown.Item>
            <Dropdown.Item eventKey="7">Ayakkabı & Çanta</Dropdown.Item>
            <Dropdown.Item eventKey="8">Çocuk</Dropdown.Item>
            <Dropdown.Item eventKey="9">Yurt Dışında</Dropdown.Item>
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
            <Dropdown.Item eventKey="1">Sofra & Mutfak</Dropdown.Item>
            <Dropdown.Item eventKey="2">
              Ev Gereçleri & Ütü Masası
            </Dropdown.Item>
            <Dropdown.Item eventKey="3">Mobilya</Dropdown.Item>
            <Dropdown.Item eventKey="4">Aydınlatma</Dropdown.Item>
            <Dropdown.Item eventKey="5">Ev Tekstil</Dropdown.Item>
            <Dropdown.Item eventKey="6">Ev Dekorasyan</Dropdown.Item>
            <Dropdown.Item eventKey="7">Yatak</Dropdown.Item>
            <Dropdown.Item eventKey="8">Ofis Mobilyaları</Dropdown.Item>
            <Dropdown.Item eventKey="9">ofis / Kırtasiye</Dropdown.Item>
            <Dropdown.Item eventKey="10">Banyo</Dropdown.Item>
            <Dropdown.Item eventKey="11">Elektrikli Ev Aletleri</Dropdown.Item>
            <Dropdown.Item eventKey="12">Yurt Dışında</Dropdown.Item>
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
            <Dropdown.Item eventKey="1">Oto Aksesuar</Dropdown.Item>
            <Dropdown.Item eventKey="2">Tüm Motosiklet Ürünleri</Dropdown.Item>
            <Dropdown.Item eventKey="3">Bahçe</Dropdown.Item>
            <Dropdown.Item eventKey="4">Banyo</Dropdown.Item>
            <Dropdown.Item eventKey="5">Eletrik & Tesisat</Dropdown.Item>
            <Dropdown.Item eventKey="6">Yapı Market</Dropdown.Item>
            <Dropdown.Item eventKey="7">İş Güvenliği</Dropdown.Item>
            <Dropdown.Item eventKey="8">Yurt Dışında</Dropdown.Item>
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
            <Dropdown.Item eventKey="9">Yurt Dışında</Dropdown.Item>
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
            <Dropdown.Item eventKey="15">Yurt Dışında</Dropdown.Item>
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
            <Dropdown.Item eventKey="19">Yurt Dışında</Dropdown.Item>
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
            <Dropdown.Item eventKey="10">Yurt Dışında</Dropdown.Item>
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
            <Dropdown.Item eventKey="6">Yurt Dışında</Dropdown.Item>
            <Dropdown.Item eventKey="7">Dijital Ürünler</Dropdown.Item>
          </DropdownButton>
        ))}
      </div>
    </div>
  );
}

export default AllCategories;