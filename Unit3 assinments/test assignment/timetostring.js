function tts (time){

   let sec = time/1000;
    var bag = ""
   for(let i=0;i<3;i++){
    if(sec>=3600){

        var hr  = Math.floor(sec/3600)
        sec = sec - (3600*hr)
        bag += hr + " hours "
         }
   
   else if(sec>=60){

        var mn = Math.floor(sec/60)
        sec = sec - (60*mn)
        bag += mn + " minutes "

         }
        else if(sec<60){

        
        bag += sec + " seconds "

            }

   }
   return bag
}



















export default tts