import { NavDropdown,Button, ButtonGroup, ButtonToolbar, Row, Col, Container, Dropdown } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

function Categories() {
    return (
        <div className="Categories">
            <section id="categories" className="mt-3">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <ButtonToolbar aria-label="Toolbar with button groups">
                                <ButtonGroup className="mr-2">
                                    <NavDropdown 
                                    style={{maxHeight: "30px"}}
                                    title="All Categories" id="navbarScrollingDropdown">
                                        <span>Elektronik</span>
                                        <Dropdown.Item>Bilgisayar / Tablet</Dropdown.Item>
                                        <Dropdown.Item>Yazıcılar & Projeksiyon</Dropdown.Item>
                                        <Dropdown.Item>Telefon & Telefon Aksesuarları</Dropdown.Item>
                                        <Dropdown.Item>Tv, Görüntü & Ses Sistemleri</Dropdown.Item>
                                        <Dropdown.Item>Beyaz Eşya</Dropdown.Item>
                                        <Dropdown.Item>Klima Ve Isıtıcalar</Dropdown.Item>
                                        <Dropdown.Item>Elektrik Ev Aletleri</Dropdown.Item>
                                        <Dropdown.Item>Foto & Kamera</Dropdown.Item>
                                        <Dropdown.Item>Oyun & Oyun Konsoları</Dropdown.Item>
                                        <span>Moda</span>
                                        <Dropdown.Item>Kadın</Dropdown.Item>
                                        <Dropdown.Item>Kadın Aksesuar & Takı</Dropdown.Item>
                                        <Dropdown.Item>Erkek</Dropdown.Item>
                                        <Dropdown.Item>Erkek Aksesuar & Takı</Dropdown.Item>
                                        <Dropdown.Item>Altın</Dropdown.Item>
                                        <Dropdown.Item>Outdoor Giyim & Ayakkabı</Dropdown.Item>
                                        <Dropdown.Item>Ayakkabı & Çanta</Dropdown.Item>
                                        <Dropdown.Item>Çocuk</Dropdown.Item>
                                        <Dropdown.Item>Yurt Dışında</Dropdown.Item>
                                        <span>Ev, Yaşam, Kırtasiye, Ofis</span>
                                        <Dropdown.Item>Sofra & Mutfak</Dropdown.Item>
                                        <Dropdown.Item>Ev Gereçleri & Ütü Masası</Dropdown.Item>
                                        <Dropdown.Item>Mobilya</Dropdown.Item>
                                        <Dropdown.Item>Aydınlatma</Dropdown.Item>
                                        <Dropdown.Item>Ev Tekstil</Dropdown.Item>
                                        <Dropdown.Item>Ev Dekorasyan</Dropdown.Item>
                                        <Dropdown.Item>Yatak</Dropdown.Item>
                                        <Dropdown.Item>Ofis Mobilyaları</Dropdown.Item>
                                        <Dropdown.Item>ofis / Kırtasiye</Dropdown.Item>
                                        <Dropdown.Item>Banyo</Dropdown.Item>
                                        <Dropdown.Item>Elektrikli Ev Aletleri</Dropdown.Item>
                                        <Dropdown.Item>Yurt Dışında</Dropdown.Item>
                                        <span>Oto, Bahçe, Yapı Market</span>
                                        <Dropdown.Item>Oto Aksesuar</Dropdown.Item>
                                        <Dropdown.Item>Tüm Motosiklet Ürünleri</Dropdown.Item>
                                        <Dropdown.Item>Bahçe</Dropdown.Item>
                                        <Dropdown.Item>Banyo</Dropdown.Item>
                                        <Dropdown.Item>Eletrik & Tesisat</Dropdown.Item>
                                        <Dropdown.Item>Yapı Market</Dropdown.Item>
                                        <Dropdown.Item>İş Güvenliği</Dropdown.Item>
                                        <Dropdown.Item>Yurt Dışında</Dropdown.Item>
                                        <span>Anne, Bebek, Oyuncak</span>
                                        <Dropdown.Item>Anne Bebek Ürünleri</Dropdown.Item>
                                        <Dropdown.Item>Oyuncuklar</Dropdown.Item>
                                        <Dropdown.Item>Araç & Gereç</Dropdown.Item>
                                        <Dropdown.Item>Emzirme & Bebek Beslenme</Dropdown.Item>
                                        <Dropdown.Item>bebek Odası & Güvenlik</Dropdown.Item>
                                        <Dropdown.Item>Bebek Bezi & Islak Mendil</Dropdown.Item>
                                        <Dropdown.Item>Bebek Bakım & Banyo & Sağlık</Dropdown.Item>
                                        <Dropdown.Item>Giyim</Dropdown.Item>
                                        <Dropdown.Item>Yurt Dışında</Dropdown.Item>
                                        <span>Spor, Outdoor</span>
                                        <Dropdown.Item>Tüm Spor Ürünleri</Dropdown.Item>
                                        <Dropdown.Item>Tüm Outdoor Ürünleri</Dropdown.Item>
                                        <Dropdown.Item>Spor-Ayakkabı</Dropdown.Item>
                                        <Dropdown.Item>Outdoor-Ayakkabı</Dropdown.Item>
                                        <Dropdown.Item>Fitness-Kondisyon</Dropdown.Item>
                                        <Dropdown.Item>Elektrikli Scooter-Paten-Kaykay</Dropdown.Item>
                                        <Dropdown.Item>Spor Branşları</Dropdown.Item>
                                        <Dropdown.Item>Bisiklet</Dropdown.Item>
                                        <Dropdown.Item>Taraftar Ürünleri</Dropdown.Item>
                                        <Dropdown.Item>Kamp & Kampçılık Malzemeleri</Dropdown.Item>
                                        <Dropdown.Item>Şişme Su Ürünleri</Dropdown.Item>
                                        <Dropdown.Item>Balıkçılık Avcılık</Dropdown.Item>
                                        <Dropdown.Item>Aksiyon Kamera</Dropdown.Item>
                                        <Dropdown.Item>Outdoor Elektirik & Optik</Dropdown.Item>
                                        <Dropdown.Item>Yurt Dışında</Dropdown.Item>
                                        <span>Kozmetik, Kişisel Bakım</span>
                                        <Dropdown.Item>Kozmetik</Dropdown.Item>
                                        <Dropdown.Item>Parfüm</Dropdown.Item>
                                        <Dropdown.Item>Makyaj</Dropdown.Item>
                                        <Dropdown.Item>Cilt Bakımı</Dropdown.Item>
                                        <Dropdown.Item>Güneş Bakımı</Dropdown.Item>
                                        <Dropdown.Item>Kişisel Bakım</Dropdown.Item>
                                        <Dropdown.Item>Ağız Bakım</Dropdown.Item>
                                        <Dropdown.Item>Traş Ürünleri</Dropdown.Item>
                                        <Dropdown.Item>Duş Jel</Dropdown.Item>
                                        <Dropdown.Item>Saç Bakım</Dropdown.Item>
                                        <Dropdown.Item>Epilasyon & Ağda</Dropdown.Item>
                                        <Dropdown.Item>Aile Planlaması Ve Cinsel Sağlık</Dropdown.Item>
                                        <Dropdown.Item>Deodorant</Dropdown.Item>
                                        <Dropdown.Item>Sıvı Sabun</Dropdown.Item>
                                        <Dropdown.Item>Kolonya</Dropdown.Item>
                                        <Dropdown.Item>El Dezenfektanı</Dropdown.Item>
                                        <Dropdown.Item>Maske & Eldiven</Dropdown.Item>
                                        <Dropdown.Item>besin Tavsiyeleri</Dropdown.Item>
                                        <Dropdown.Item>Yurt Dışında</Dropdown.Item>
                                        <span>Süper Market, Pet Shop</span>
                                        <Dropdown.Item>Süper Market Anasayfa</Dropdown.Item>
                                        <Dropdown.Item>Deterjan & Temzilik Ürünleri</Dropdown.Item>
                                        <Dropdown.Item>Bebek Bezleri Ve Islak Mendil</Dropdown.Item>
                                        <Dropdown.Item>Kağıt Ürünleri</Dropdown.Item>
                                        <Dropdown.Item>İçecekler</Dropdown.Item>
                                        <Dropdown.Item>Gıda Ürünleri</Dropdown.Item>
                                        <Dropdown.Item>Pet Shop</Dropdown.Item>
                                        <Dropdown.Item>Ev Tüketim Malzemeleri</Dropdown.Item>
                                        <Dropdown.Item>Ofis Tüketim Malzemeleri</Dropdown.Item>
                                        <Dropdown.Item>Yurt Dışında</Dropdown.Item>
                                        <span>Kitap, Müzik, Film, Hobi</span>
                                        <Dropdown.Item>Kitap & Dergi</Dropdown.Item>
                                        <Dropdown.Item>Müzik Enstrümanları Ve Ekipmanları</Dropdown.Item>
                                        <Dropdown.Item>Drone Multikopter</Dropdown.Item>
                                        <Dropdown.Item>Hobi & Oyun</Dropdown.Item>
                                        <Dropdown.Item>Film</Dropdown.Item>
                                        <Dropdown.Item>Yurt Dışında</Dropdown.Item>
                                        <Dropdown.Item>Dijital Ürünler</Dropdown.Item>
                                    </NavDropdown>
                                </ButtonGroup>
                                <ButtonGroup className="mr-2">
                                    <Button variant="outline-primary">Offers</Button>
                                </ButtonGroup >
                                <ButtonGroup className="mr-2">
                                    <Button variant="outline-primary">Top Sold</Button>
                                </ButtonGroup >
                                <ButtonGroup className="mr-2">
                                    <Button variant="outline-primary">Other Products</Button>
                                </ButtonGroup >
                                <ButtonGroup className="mr-2">
                                    <Button variant="outline-primary">Gift Ideas</Button>
                                </ButtonGroup >
                                <ButtonGroup className="mr-2">
                                    <NavDropdown title="Language/Currency" id="navbarSrollingDropdown"></NavDropdown>
                                </ButtonGroup >
                            </ButtonToolbar>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
    
}

export default Categories;