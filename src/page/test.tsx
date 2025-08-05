<div
  className="relative w-[85%] mx-auto h-96 bg-cover bg-center rounded-xl overflow-hidden shadow-lg"
  style={{ backgroundImage: `url(${item.image})` }}
>
  {/* Overlay làm mờ */}
  <div className="absolute bottom-0 left-0 right-0 h-24 backdrop-blur-sm bg-black/30 z-10" />

  {/* Đoạn text nằm trên overlay */}
  <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm z-20">
    {item.content}
  </div>
</div>
