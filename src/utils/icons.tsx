import { MessageQuestion, Setting, Setting2, Share, Sms, User } from "iconsax-react-nativejs";
import AppColors from "../theme/colors";

const profileIcon=<User size={27} color={AppColors.BLACK} variant="Bold"/>
const settingIcon=<Setting2 size={27} variant="Bold" color={AppColors.BLACK}/>
const contactIcon=<Sms size={27} variant="Bold" color={AppColors.BLACK}/>
const shareIcon=<Share size={27} variant="Bold" color={AppColors.BLACK}/>
const helpIcon=<MessageQuestion size={27} variant="Bold" color={AppColors.BLACK}/>

export {profileIcon,settingIcon,contactIcon,shareIcon,helpIcon}