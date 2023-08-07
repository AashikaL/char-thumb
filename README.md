# What is this
 This is character thumbnail. It is used to  create a thumbnail for  initial words. 

# Installation
`npm i char-thumbnail`

# Usage

````
   import { CharThumbnail } from 'char-thumbnail';

   const charThumbnail = new CharThumbnail();

   const name = charThumbnail.charThumb('aashika',{size: 3});

   // => A00

   const name = charThumbnail.charThumb('aashika lakshmanan',{size: 2});

   // => AL

   const name = charThumbnail.charThumb('aashika lakshmanan m',{size: 3});

   // => ALM

   const name = charThumbnail.charThumb('aashika',{size: 1});

   // => A

````
