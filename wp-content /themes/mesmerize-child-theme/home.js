
//parallax effekt på video
window.onscroll = () => {
    jQuery("#wp-custom-header-video, #header-video").css('top', window.scrollY * 0.5);
}

window.onload = () => {
  let header = document.getElementById("wp-custom-header");

  // video - så den vises på mobil i header.
  if (!header || header.getElementsByTagName("video").length > 0) return;

  let video = document.createElement("video");
  video.id = "header-video";
  video.src =
    "https://byprisfeldt.dk/wp-content/uploads/2020/02/e133bfcf-42cc-4aad-9b52-a10728a718f6.mp4";
  video.loop = true;
  video.autoplay = true;
  video.muted = true;
  video.playsinline = true;
  video.load();

  header.appendChild(video);
};
