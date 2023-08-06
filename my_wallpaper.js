//your parameter variables go here
let rect_width  = 60;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(255,182,193); //light pink colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  // Original
  // rect(40 ,40, rect_width, rect_height);
  
  // rect(1 ,1, rect_width, rect_height);

  
  
  fill(193, 154, 107);
  ellipse(25,25,40,40); 
  ellipse(75,25,40,40);
  ellipse(50,50,80,80);
  fill(0,0,0);
  ellipse(30,40,13,13);
  ellipse(70,40,13,13);

}