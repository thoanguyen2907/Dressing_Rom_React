import data from './../../data/Data.json';
const initialDefault = {
    navPills: data.navPills,
    tabPanes: data.tabPanes,
    tabPaneArrayChosens: [{
        "id": "topcloth_1",
        "type": "topclothes",
        "name": "Top Cloth 1",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/clothes/topcloth1_show.jpg",
        "imgSrc_png": "../assets/images/clothes/topcloth1.png"
      },
      {
        "id": "topcloth_2",
        "type": "topclothes",
        "name": "Top Cloth 2",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/clothes/topcloth2_show.jpg",
        "imgSrc_png": "../assets/images/clothes/topcloth2.png"
      },
      {
        "id": "topcloth_3",
        "type": "topclothes",
        "name": "Top Cloth 3",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/clothes/topcloth3_show.jpg",
        "imgSrc_png": "../assets/images/clothes/topcloth3.png"
      },
      {
        "id": "topcloth_4",
        "type": "topclothes",
        "name": "Top Cloth 4",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/clothes/topcloth4_show.jpg",
        "imgSrc_png": "../assets/images/clothes/topcloth4.png"
      },
      {
        "id": "topcloth_5",
        "type": "topclothes",
        "name": "Top Cloth 5",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/clothes/topcloth5_show.jpg",
        "imgSrc_png": "../assets/images/clothes/topcloth5.png"
      },
      {
        "id": "topcloth_6",
        "type": "topclothes",
        "name": "Top Cloth ",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/clothes/topcloth6_show.jpg",
        "imgSrc_png": "../assets/images/clothes/topcloth6.png"
      }],
    listChosens: [],

}
const dressingReducer = (state = initialDefault, action) => {
  

    return { ...state }
}
export default dressingReducer; 