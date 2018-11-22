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
    },
    {
        id:"garlic",
        name:"Garlic",
        productType:"premium",
        parent:"Vegetable",
        parentId:"vegetable",
        hex:"fields",
        expansion:"AGR",
        unlockedAt:5
    },
    {
        id:"apple",
        name:"Apple",
        productType:"standard",
        parent:"Fruit",
        parentId:"fruit",
        hex:"fields",
        expansion:"AGR",
        unlockedAt:5
    },
    {
        id:"radish",
        name:"Radish",
        productType:"premium",
        parent:"Vegetable",
        parentId:"vegetable",
        hex:"fields",
        expansion:"AGR",
        unlockedAt:6
    },
    {
        id:"oats",
        name:"Oats",
        productType:"premium",
        parent:"Grain",
        parentId:"grain",
        hex:"fields",
        expansion:"AGR",
        unlockedAt:6
    },
    {
        id:"grape",
        name:"Grape",
        productType:"premium",
        parent:"Fruit",
        parentId:"fruit",
        hex:"fields",
        expansion:"AGR",
        unlockedAt:7
    },
    
    {
        id:"banana",
        name:"Banana",
        productType:"premium",
        parent:"Fruit",
        parentId:"fruit",
        hex:"fields",
        expansion:"AGR",
        unlockedAt:8
    },
    {
        id:"chili-pepper",
        name:"Chili Pepper",
        productType:"premium",
        parent:"Vegetable",
        parentId:"vegetable",
        hex:"fields",
        expansion:"AGR",
        unlockedAt:9
    },
    {
        id:"cucumber",
        name:"Cucumber",
        productType:"premium",
        parent:"Vegetable",
        parentId:"vegetable",
        hex:"fields",
        expansion:"AGR",
        unlockedAt:10
    },
    
    //okay, fields is done. Let's do pasture now:

    {
        id:"sheep",
        name:"Sheep",
        productType:"base",
        parent:null,
        parentId:null,
        hex:"pasture",
        expansion:"AGR",
        unlockedAt:0
    },
    {
        id:"wool",
        name:"Wool",
        productType:"standard",
        parent:"Sheep",
        parentId:"sheep",
        hex:"pasture",
        expansion:"AGR",
        unlockedAt:0
    },
    {
        id:"cow",
        name:"Cow",
        productType:"base",
        parent:null,
        parentId:null,
        hex:"pasture",
        expansion:"AGR",
        unlockedAt:1
    },
    {
        id:"cloth",
        name:"Cloth",
        productType:"premium",
        parent:"Sheep",
        parentId:"sheep",
        hex:"pasture",
        expansion:"AGR",
        unlockedAt:1
    },
    {
        id:"lamb-chop",
        name:"Lamb Chop",
        productType:"standard",
        parent:"Sheep",
        parentId:"sheep",
        hex:"pasture",
        expansion:"AGR",
        unlockedAt:2
    },
    {
        id:"milk",
        name:"Milk",
        productType:"standard",
        parent:"Cow",
        parentId:"cow",
        hex:"pasture",
        expansion:"AGR",
        unlockedAt:2
    },
    {
        id:"chicken",
        name:"Chicken",
        productType:"base",
        parent:null,
        parentId:null,
        hex:"pasture",
        expansion:"AGR",
        unlockedAt:3
    },
    {
        id:"leather",
        name:"Leather",
        productType:"standard",
        parent:"Cow",
        parentId:"cow",
        hex:"pasture",
        expansion:"AGR",
        unlockedAt:3
    },
    {
        id:"egg",
        name:"Egg",
        productType:"standard",
        parent:"Chicken",
        parentId:"chicken",
        hex:"pasture",
        expansion:"AGR",
        unlockedAt:4
    },
    {
        id:"beef",
        name:"Beef",
        productType:"standard",
        parent:"Cow",
        parentId:"cow",
        hex:"pasture",
        expansion:"AGR",
        unlockedAt:4
    },
    {
        id:"pig",
        name:"Pig",
        productType:"base",
        parent:null,
        parentId:null,
        hex:"pasture",
        expansion:"AGR",
        unlockedAt:5
    },
    {
        id:"drumstick",
        name:"Drumstick",
        productType:"premium",
        parent:"Chicken",
        parentId:"chicken",
        hex:"pasture",
        expansion:"AGR",
        unlockedAt:5
    },
    {
        id:"pork",
        name:"Pork",
        productType:"standard",
        parent:"Pig",
        parentId:"pig",
        hex:"pasture",
        expansion:"AGR",
        unlockedAt:6
    },
    {
        id:"cow-tongue",
        name:"Cow Tongue",
        productType:"premium",
        parent:"Cow",
        parentId:"cow",
        hex:"pasture",
        expansion:"AGR",
        unlockedAt:6
    },
    {
        id:"goat",
        name:"Goat",
        productType:"base",
        parent:null,
        parentId:null,
        hex:"pasture",
        expansion:"AGR",
        unlockedAt:7
    },
    {
        id:"feather",
        name:"Feather",
        productType:"premium",
        parent:"Chicken",
        parentId:"chicken",
        hex:"pasture",
        expansion:"AGR",
        unlockedAt:8
    },
    {
        id:"bacon",
        name:"Bacon",
        productType:"premium",
        parent:"Pig",
        parentId:"pig",
        hex:"pasture",
        expansion:"AGR",
        unlockedAt:9
    },
    {
        id:"goat-cheese",
        name:"Goat Cheese",
        productType:"premium",
        parent:"Goat",
        parentId:"goat",
        hex:"pasture",
        expansion:"AGR",
        unlockedAt:10
    },
    {
        id:"horse",
        name:"Horse",
        productType:"base",
        parent:null,
        parentId:null,
        hex:"pasture",
        expansion:"AGR",
        unlockedAt:11
    },

    //okay, next in AGR is spice
    //fortunately there aren't a whole lot of spice cards

    {
        id:"spice",
        name:"Spice",
        productType:"base",
        parent:null,
        parentId:null,
        hex:"spice",
        expansion:"AGR",
        unlockedAt:0
    },
    {
        id:"nutmeg",
        name:"Nutmeg",
        productType:"premium",
        parent:"Spice",
        parentId:"spice",
        hex:"spice",
        expansion:"AGR",
        unlockedAt:0
    },
    
    {
        id:"cinnamon",
        name:"Cinnamon",
        productType:"premium",
        parent:"Spice",
        parentId:"spice",
        hex:"spice",
        expansion:"AGR",
        unlockedAt:2
    },
    {
        id:"sugar",
        name:"Sugar",
        productType:"unique",
        parent:null,
        parentId:null,
        hex:"spice",
        expansion:"AGR",
        unlockedAt:0
    },
];