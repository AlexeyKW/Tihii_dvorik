var panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, panorama8, panorama9, panorama10, panorama11, panorama12, viewer, container, infospot;

container = document.querySelector( '#container' );

panorama1 = new PANOLENS.ImagePanorama( './asset/PIC_1.jpg' );
panorama2 = new PANOLENS.ImagePanorama( './asset/PIC_2.jpg' );
panorama3 = new PANOLENS.ImagePanorama( './asset/PIC_3.jpg' );
panorama4 = new PANOLENS.ImagePanorama( './asset/PIC_4.jpg' );
panorama5 = new PANOLENS.ImagePanorama( './asset/PIC_5.jpg' );
panorama6 = new PANOLENS.ImagePanorama( './asset/PIC_6.jpg' );
panorama7 = new PANOLENS.ImagePanorama( './asset/PIC_7.jpg' );
panorama8 = new PANOLENS.ImagePanorama( './asset/PIC_8.jpg' );
panorama9 = new PANOLENS.ImagePanorama( './asset/PIC_9.jpg' );
panorama10 = new PANOLENS.ImagePanorama( './asset/PIC_10.jpg' );
panorama11 = new PANOLENS.ImagePanorama( './asset/PIC_11.jpg' );
panorama12 = new PANOLENS.ImagePanorama( './asset/PIC_12.jpg' );


  // viewer.setPanorama( panorama2 );
// } );

// panorama.add( infospot );

viewer = new PANOLENS.Viewer( {output: 'console', container: container});
viewer.add( panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, panorama8, panorama9, panorama10, panorama11, panorama12);

panorama1.link( panorama2, new THREE.Vector3( 4321, 285, -2492 ) );

panorama1.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4073.53, 543.98, -2833.95), 0 );
} );

panorama2.link( panorama1, new THREE.Vector3( 4920.45, -52.53, -841.50 ) );
panorama2.link( panorama3, new THREE.Vector3( 261.82, -358.27, -4972.89 ) );

panorama2.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(1750.87, 495.49, -4646.74), 0 );
} );

panorama3.link( panorama4, new THREE.Vector3( 3366.00, 162.52, 3686.67 ) );
panorama3.link( panorama2, new THREE.Vector3( -597.00, -211.52, 4952.67 ) );

panorama3.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(3351.07, 531.55, 3665.27), 0 );
} );

panorama4.link( panorama5, new THREE.Vector3( -3391.00, -284.52, -3654.67 ) );
panorama4.link( panorama3, new THREE.Vector3( -2268.00, -184.52, -4439.67 ) );

panorama4.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3410.00, 83.49, -3646.74), 0 );
} );

panorama5.link( panorama4, new THREE.Vector3( 905.31, -1713.15, 4601.88 ) );
panorama5.link( panorama6, new THREE.Vector3( 4455.46, -2227.34, -366.58 ) );

panorama5.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4309.57, -823.48, -2386.86), 0 );
} );

panorama6.link( panorama5, new THREE.Vector3( 4854.44, -241.01, 1138.49 ) );
panorama6.link( panorama7, new THREE.Vector3( 2234.58, -655.35, -4413.19 ) );
panorama6.link( panorama8, new THREE.Vector3( -4871.50, 15.43, -1109.03 ) );
panorama6.link( panorama10, new THREE.Vector3( -337.45, 692.85, 4931.33 ) );

panorama6.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-2150.85, -419.98, -4487.08), 0 );
} );

panorama7.link( panorama6, new THREE.Vector3( 2264.53, -1513.16, 4185.92 ) );

panorama7.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(2193.97, -353.20, -4470.50), 0 );
} );

panorama8.link( panorama6, new THREE.Vector3( 2631.72, -463.27, -4216.23 ) );

panorama8.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(2541.04, -729.52, -4237.59), 0 );
} );

panorama9.link( panorama6, new THREE.Vector3( -10.55, -2842.75, 4108.80 ) );
panorama9.link( panorama10, new THREE.Vector3( -1430.84, -86.37, 4782.39 ) );
panorama9.link( panorama11, new THREE.Vector3( -3772.39, -2859.86, 1591.85 ) );

panorama9.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(1133.75, 61.61, -4863.00), 0 );
} );

panorama10.link( panorama6, new THREE.Vector3( 929.75, -2984.70, 3895.61 ) );
panorama10.link( panorama9, new THREE.Vector3( 2932.62, -714.38, 3981.40 ) );
panorama10.link( panorama11, new THREE.Vector3( 4437.52, -398.18, 2253.79 ) );
panorama10.link( panorama12, new THREE.Vector3( 3691.83, -207.69, -3358.02 ) );

panorama10.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4982.57, -279.44, 123.06), 0 );
} );

panorama11.link( panorama10, new THREE.Vector3( -1798.72, -246.42, -4647.56 ) );

panorama11.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3486.94, 140.72, 3566.63), 0 );
} );

panorama12.link( panorama10, new THREE.Vector3( -3196.72, 240.41, -3824.19 ) );

panorama12.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4036.05, -225.67, -2936.02), 0 );
} );





