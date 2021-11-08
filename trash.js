// Planes

// const geometry3 = new THREE.PlaneGeometry(box_size, box_size / 3);
// const material3 = new THREE.MeshStandardMaterial({
//   color: 0x00ff00,
//   wireframe: true,
// });

// const planes = new THREE.Object3D();

// Array(4)
//   .fill()
//   .forEach((_, i) => {
//     const plane = new THREE.Mesh(geometry3, material3);
//     plane.position.y = 10;
//     switch (i) {
//       case 0:
//         plane.position.z = 7.5;
//         break;
//       case 1:
//         plane.rotation.y = THREE.MathUtils.degToRad(90);
//         plane.position.x = -7.5;
//         break;
//       case 2:
//         plane.rotation.y = THREE.MathUtils.degToRad(180);
//         plane.position.z = -7.5;
//         break;
//       case 3:
//         plane.rotation.y = THREE.MathUtils.degToRad(270);
//         plane.position.x = 7.5;
//         break;
//       default:
//         break;
//     }
//     planes.add(plane);
//   });

// const plane = new THREE.Mesh(
//   new THREE.PlaneGeometry(15, 5),
//   new THREE.MeshStandardMaterial({ color: "purple", wireframe: true })
// );

// const element = document.createElement("h2");
// element.innerHTML = "One Go!";
// const cssObject = new CSS3DObject(element);
// cssObject.position = plane.position;
// cssObject.rotation = plane.rotation;

// const cssRenderer = new CSS3DRenderer();

// const header = [];
// const headerBg = [];
// const welcomes = [];

// const loader = new FontLoader();
// loader.load("fonts/Work Sans_Bold.json", (font) => {
// Header

// const myName = ["QIAN", "(ALICE)", "HUANG"];
// myName.forEach((text, i) => {
//   const geometry = new TextGeometry(text, {
//     font: font,
//     size: 5,
//     height: 0.1,
//   });

//   const mesh = new THREE.Mesh(
//     geometry,
//     new THREE.MeshStandardMaterial({ color: "black" })
//   );

//   mesh.castShadow = true;
//   mesh.position.y = -i * 7;
//   scene.add(mesh);
//   header.push(mesh);

//   // background plane
//   let width;
//   switch (i) {
//     case 0:
//       width = 20;
//       break;
//     case 1:
//       width = 25;
//       break;
//     default:
//       width = 24;
//       break;
//   }
//   const backgroundPlane = new THREE.Mesh(
//     new THREE.PlaneGeometry(width, 7),
//     new THREE.MeshStandardMaterial({ color: "red" })
//   );
//   backgroundPlane.position.x = 0;
//   backgroundPlane.position.y = mesh.position.y;
//   scene.add(backgroundPlane);
//   headerBg.push(backgroundPlane);
// });

// loader.load("fonts/Poppins_Regular.json", (font) => {
//   // Welcomes

//   Array(5)
//     .fill()
//     .forEach((_, column) => {
//       Array(30)
//         .fill()
//         .forEach((_, row) => {
//           const geometry = new TextGeometry("Welcome to my website!", {
//             font: font,
//             size: 2,
//             height: 0.1,
//           });

//           const mesh = new THREE.Mesh(
//             geometry,
//             new THREE.MeshStandardMaterial({ color: "black" })
//           );

//           mesh.castShadow = true;
//           mesh.position.x = column * 35 - 100;
//           mesh.position.y = row * 3 - 30;
//           welcomes.push(mesh);
//         });
//     });

//   welcomes.forEach((welcome) => scene.add(welcome));
// });
// header.forEach(
//   (mesh) => (mesh.position.z = Math.abs(Math.sin(time * 2)) * 0.6)
// );

// header.forEach((head, i) => {
//   headingTimes[i] += delta;
//   head.position.z = Math.abs(Math.sin(headingTimes[i] * 2)) * 0.6;
// });

// welcomes.forEach((welcome, i) => {
//   welcomeTimes[i] += delta;
//   welcome.position.z = Math.abs(Math.sin(welcomeTimes[i] * 2)) * 0.2;
// });
