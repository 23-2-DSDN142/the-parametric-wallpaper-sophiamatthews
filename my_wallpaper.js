//your parameter variables go here
let rect_width = 60;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 50;
}

function wallpaper_background() {
  //background(255, 182, 193); //light pink colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  line(0, 0, 200, 0);
  line(0,200,0,0)
  line(200,200,200,0);
  line(200,200,0,200);
  
  let inside = color(158,208,230);
  let middle = color(225, 193, 69);
  let outside = color(225,107,108 );

  
  translate(0, 0);
  fill(outside);
  rect(0, 0, 200, 200);
  fill(middle);
  rect(40, 60, 120, 120);
  fill(inside);
  rect(60, 90, 80, 80);


 
  translate(360, 80);
  fill(inside);
  rect(0, 0, 200, 200);
  fill(outside);
  rect(40, 60, 120, 120);
  fill(middle);
  rect(60, 90, 80, 80);
 
}