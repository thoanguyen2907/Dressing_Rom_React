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
const dressingReducerLifeCycle = (state = initialDefault, action) => {
    let index = -1; 
    let listChosenUpdate; 
    switch (action.type) {

        case "CHOSE_TAB_NAME":
            let typeChosen = action.typeName;
            state.tabPaneArrayChosens = state.tabPanes.filter(item => item.type === typeChosen);      
            return { ...state };
        case "TRY_CLOTHES": 
            let chosenItem =  action.tabPane;
            listChosenUpdate = [...state.listChosens];         
            index = state.listChosens.findIndex(item => item.type === chosenItem.type); 
            if(index !== -1){
                listChosenUpdate[index] = chosenItem; 
            } else {
                listChosenUpdate.push(chosenItem); 
            }

            state.listChosens = listChosenUpdate;

            return {...state}
        default:
            break;
    }
    return { ...state }
}
export default dressingReducerLifeCycle; 