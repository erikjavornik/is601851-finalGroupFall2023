library(tidyverse)
phi <- 1.618033988
abs_tot_width <- 1400
abs_tot_height <- 1400 + (1400*0.2) # 0.05 for header and 0.15 for footer


# Heights
header_height <- abs_tot_width * 0.07
footer_height <- abs_tot_width * 0.13
menu_showcase <- (abs_tot_width)/2
user_story_height <- (abs_tot_width)/2

heights <- c(header_height, footer_height, menu_showcase, user_story_height)
sum(heights) == abs_tot_height
