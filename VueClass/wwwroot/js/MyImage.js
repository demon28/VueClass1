


Vue.component("Myimage",{


    props: {
        imgname: "",
        imgurl: ""

    },
    template: `<div style='text- align: center'>
             <span> 图片名称：{{ imgname }} </span >
            <br />
         <img :src='imgurl'>
        "</div>`

});
