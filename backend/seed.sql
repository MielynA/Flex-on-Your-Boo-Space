DROP DATABASE IF EXISTS flexonyourboospace;
CREATE DATABASE flexonyourboospace;


\c flexonyourboospace

CREATE TABLE booSpace (
  id SERIAL PRIMARY KEY,
  toName VARCHAR NULL,
  fromName VARCHAR NULL, 
  personalNote VARCHAR NULL, 
  img_url VARCHAR NULL, 
  title VARCHAR NULL, 
  horoscropeSign VARCHAR NULL,
  date  TIMESTAMP NULL DEFAULT NOW(),
  spaceDate TIMESTAMP NOT NULL DEFAULT NOW(),
  description VARCHAR NULL

); 


INSERT INTO booSpace (toName, fromName, personalNote, img_url, title, horoscropeSign, date, spaceDate, description) 
VALUES ('Mielyn', 'Anonymous', 'Just want you to know that you rock!!!!! ', 'https://apod.nasa.gov/apod/image/1904/pia23122c-16.jpg', 'rock on', 'Capricorn', now(), '1996-01-02','Bright elliptical galaxy Messier 87 (M87) is home to the supermassive black hole captured by planet Earths Event Horizon Telescope in the first ever image of a black hole. Giant of the Virgo galaxy cluster about 55 million light-years away, M87 is the large galaxy rendered in blue hues in this infrared image from the Spitzer Space telescope.  Though M87 appears mostly featureless and cloud-like, the Spitzer image does record details of relativistic jets blasting from the galaxys central region. Shown in the inset at top right, the jets themselves span thousands of light-years. The brighter jet seen on the right is approaching and close to our line of sight. Opposite, the shock created by the otherwise unseen receding jet lights up a fainter arc of material.');
