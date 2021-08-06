import { Breadcrumb} from 'react-bootstrap';

function Footer() {
    
    return (
        <div className="Footer">
            <footer id="footer">
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Ana Sayfa</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Çözüm Merkezi</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">İletişim</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Ödeme Methodları</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">İptal, İade, Değişim</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Kullanıcı Güvenliği</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Canlı Destek</Breadcrumb.Item>
                    <Breadcrumb.Item active>Telif Hakkları Korunmaktadır.</Breadcrumb.Item>
                </Breadcrumb>
                </footer>
        </div>

    )
}

export default Footer;