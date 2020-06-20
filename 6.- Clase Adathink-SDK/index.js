var express = require("express");
var {FB,Text,Typing ,Image,QuickReplies,
    QuickRepliesOption , DownloadFile} = require("adathink-sdk-bot")
var app  =express();

app.use(express.json())

//IMPORTANTE!!!!

FB.config({
    TOKEN_FACEBOOK:"Xg3AU",
    KEY_FACEBOOK: "Adathink Code" 
})
//Enlaze entre tu servidor y facebook
app.get("/",FB.checkWebhook)


app.post("/", async function(req,res){
    //Mandarle un ok a facebook
    res.sendStatus(200);

    //Instaciamos la Clase FB pasando como parametro el request que nos envia FAcebook
    var FBTools =  new FB(req.body)

    //Obtien el mensaje de texto del usuario
    // console.log(FBTools.getMessage())

    //Obtiene el mensaje del payload de un quick replies
    // console.log(FBTools.getPayload())

   

    //Envia Un Escribiendo
    // FBTools.sendDirect(new Typing());

   // Agrega un tiempo de espera para el siguiente mensaje
   //  await FBTools.sleep(400)


    
   // Enviamos un mensaje Directo

    //  let imagen = new Image("https://miro.medium.com/max/554/1*42aKSdKAWZ3VtqT5ICd82w.png");
    //  FBTools.sendDirect(imagen)


   // console.log("Imagenes",FBTools.getImage())




   // Enviamos Option a Facebook

    // let quick = new QuickReplies("estas opciones ")
    // let option_email = new QuickRepliesOption.QuickRepliesOption(QuickRepliesOption.TYPE_EMAIL);
    // let option_text = new QuickRepliesOption.QuickRepliesOption(QuickRepliesOption.TYPE_TEXT,"X","1");
    // quick.addOption(option_email);
    // quick.addOption(option_text);
    // FBTools.sendDirect(quick)


     
    //- Obtenemos el Info del Usuario , (first_name, foto  perfil)
    // let user = await FBTools.getInfoUser();
    //  console.log(user);

    
    //Enviamos un Mensaje DE Texto

    // let texto1 = new Text("Hola " + user.first_name + " ,  soy un bot en que te ayudo ?" )
    //  FBTools.sendDirect(texto1);
    

    //Descarga las foto perfil 

    //  let download =  await DownloadFile.syncDownload(user.profile_pic,{ruta:"./files/perfil.jpg"})
    // console.log(download)


     //Descargar una imagen 
     //Si el usuario envia una foto con este metodo , trae la url
    //  console.log("Imagenes",FBTools.getImage())


    // Valida si el usuario envio una foto, si  tieene foto , lo descargar

    //  if(FBTools.hasImage()){
    //  let download =  await DownloadFile.syncDownload(FBTools.getImage(),{ruta:"./files",defaultName:true})
    //     console.log(download)
    //  }


    //Mensajes Agrupados
    FBTools.addResponse(new Typing())
    FBTools.addResponse(new Text("Hola que tal"))
    FBTools.addResponse(new Image("https://miro.medium.com/max/554/1*42aKSdKAWZ3VtqT5ICd82w.png"))
    FBTools.addResponse(new Text("este es una imagen"))

    let quick = new QuickReplies("estas opciones ")
    let option_email = new QuickRepliesOption.QuickRepliesOption(QuickRepliesOption.TYPE_EMAIL);
    let option_text = new QuickRepliesOption.QuickRepliesOption(QuickRepliesOption.TYPE_TEXT,"X","1");

    quick.addOption(option_email);
    quick.addOption(option_text);

    FBTools.addResponse(quick);

    let result  = await FBTools.sendResponse()
    console.log(result)
})


app.listen(3150 , function(){
    console.log("Mi servidor esta ejecutando")
})