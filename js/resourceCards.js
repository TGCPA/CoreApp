const resourceCards = [
    
    //alrighty. There's a crap ton of stuff, so here we go:
    //let's start with agriculture
    //more specifically, the fields hex
    /* TEMPLATE:
    {
        id:"",              //all lowercase
        name:"",            //display name 
        productType:"",     //unique, premium, standard, base
        parent:"",          //null if base, otherwise parent display name
        parentId:"",        //same as above, except parent ID instead of DN
        hex:"",             //all lowercase
        expansion:"",       //expansion id, e.g.: AGR, IND, ND, "none"
        unlockedAt:0,       //AGR/IND tier that this is unlocked at
    } 
    */
    {
        id:"grain",
        name:"Grain",
        productType:"base",
        parent:null,
        parentId:null,
        hex:"fields",
        expansion:"AGR",
        unlockedAt:0
    },
    {
        id:"wheat",
        name:"Wheat",
        productType:"standard",
        parent:"Grain",
        parentId:"grain",
        hex:"fields",
        expansion:"AGR",
        unlockedAt:0
    },
    {
        id:"vegetable",
        name:"Vegetable",
        productType:"base",
        parent:null,
        parentId:null,
        hex:"fields",
        expansion:"AGR",
        unlockedAt:1
    },
    {
        id:"carrot",
        name:"Carrot",
        productType:"standard",
        parent:"Vegetable",
        parentId:"vegetable",
        hex:"fields",
        expansion:"AGR",
        unlockedAt:1
    },
    {
        id:"fruit",
        name:"Fruit",
        productType:"base",
        parent:null,
        parentId:null,
        hex:"fields",
        expansion:"AGR",
        unlockedAt:2
    },
    {
        id:"tomato",
        name:"Tomato",
        productType:"standard",
        parent:"Fruit",
        parentId:"fruit",
        hex:"fields",
        expansion:"AGR",
        unlockedAt:2
    },
    {
        id:"lettuce",
        name:"Lettuce",
        productType:"standard",
        parent:"Vegetable",
        parentId:"vegetable",
        hex:"fields",
        expansion:"AGR",
        unlockedAt:3
    },
    {
        id:"rice",
        name:"Rice",
        productType:"standard",
        parent:"Grain",
        parentId:"grain",
        hex:"fields",
        expansion:"AGR",
        unlockedAt:3
    },
    {
        id:"broccoli",
        name:"Broccoli",
        productType:"standard",
        parent:"Vegetable",
        parentId:"vegetable",
        hex:"fields",
        expansion:"AGR",
        unlockedAt:4
    },
    {
        id:"cotton",
        name:"Cotton",
        productType:"unique",
        parent:"Cotton",
        parentId:"cotton",
        hex:"fields",
        expansion:"AGR",
        unlockedAt:4
    },
    {
        id:"beer",
        name:"Beer",
        productType:"premium",
        parent:"Grain",
        parentId:"grain",
        hex:"fields",
        expansion:"AGR",
        unlockedAt:4
    }
];