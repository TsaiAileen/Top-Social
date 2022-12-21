import "./index.css"

// 這個框架只有vite才能拿得到數據，其他的框架是行不通的 (目前沒後端)
import { profile, highline, cards, message, request } from "./data/db.json"
// 有後端再用這個
// import { profile, highline, cards, message, request } from "@/js/database"
import {
  // navbar, 
  // navbar_container, 
  navbar_container_logo, 
  // navbar_container_searchBar,
  // navbar_container_create,
  navbar_container_create_img,
  left_profile_img,
  left_profile_name,
  left_profile_at,
  middle_highline_description,
  middle_highline_description_img,
  middle_highline_description_p,
  middle_form_img,
  middle_form_input_text,
  create_news,
  create_profile_structure,
  create_picture_structure,
  create_control_structure,
  create_comment_structure,
  create_friend_list,
  create_request_list
} from "@/js/common"

// --- Nav ---//
navbar_container_logo.textContent = "TopSocial"
navbar_container_create_img.src = profile.img_src

// --- Left --- //
// console.log(profile);
left_profile_img.src = profile.img_src
left_profile_name.textContent = profile.name
left_profile_at.textContent = profile.at

// --- Middle ---//


// --- Form ---//
middle_form_img.src = profile.img_src
middle_form_input_text.placeholder = `What is on your mind, ${profile.name} ?`

// --- Highline ---//
middle_highline_description_p.forEach((element, index) => {
  element.textContent = highline.description[index]
})
middle_highline_description_img.forEach((element, index) => {
  element.src = `./src/images/profile/profile_${index + 3}.png`
})
middle_highline_description.forEach((element, index) => {
  element.style.backgroundImage = `url("./src/images/highline/highline_${index + 1}.jpeg")`
})

// --- Card ---//
const cardDom = document.querySelector('.card')

cards.forEach(element => {
  const doms = create_news()
  cardDom.appendChild(doms.info)
  // 卡片的最上面profile
  create_profile_structure(doms.info_profile, element.profile)
  // 卡片的中間的picture
  create_picture_structure(doms.info_picture, element.picture)
  // 卡片的
  create_control_structure(doms.info_control, element.control)
  // 卡片的
  create_comment_structure(doms.info_comment, element.comment)
})

// Message
const messageDom = document.querySelector('.friend-list')
create_friend_list(messageDom, message)

// Request
const requestDom = document.querySelector('.request-list')
create_request_list(requestDom, request)


// await getProfile()