import "./Video.css";
const Video = () => {
  const embedUrl =
    "https://cdn.embedly.com/widgets/media.html?src=https://www.relive.cc/view/vZqNYMMe5G6/widget?r=embed-site&url=https://www.relive.cc/view/vZqNYMMe5G6?r=embed-site&image=https://www.relive.cc/view/vZqNYMMe5G6/png?x-ref=embed-site&key=f1631a41cb254ca5b035dc5747a5bd75&type=text/html&schema=relive";
  return (
    <div className="embedly-responsive">
      <iframe
        src={embedUrl}
        title="iframe"
        frameborder="0"
        className="embedly-embed"
        scrolling="no"
        allow="autoplay"
        allowfullscreen
      />
    </div>
  );
};

export default Video;
