import { Dimensions } from "react-native";
import { User } from "iconsax-react-nativejs";
import { contactIcon, helpIcon, profileIcon, settingIcon, shareIcon } from "./icons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ProfileMenu = [
    {
        id: 1,
        title: "Profile",
        icon: profileIcon,
    },
    {
        id: 2,
        title: "Setting",
        icon: settingIcon,
    },
    {
        id: 3,
        title: "Contact",
        icon: contactIcon,
    },
    {
        id: 4,
        title: "Share App",
        icon: shareIcon,
    },
    {
        id: 5,
        title: "Help",
        icon: helpIcon,
    },
];

enum ErrorsMessages{
    SERVER_ERROR="Şuanda hizmet sağlayamıyoruz.Lütfen daha sonra tekrar deneyiniz.",
    ACCOUNTS_ALREADY_EXIST="Bu hesap zaten kayıtlı lütfen farklı bir email adresi ile tekrar deneyiniz.",
    PHONE_FORMAT_ERROR="Telefon numarası formatı hatalı",
}
export { windowHeight, windowWidth, ProfileMenu ,ErrorsMessages}
