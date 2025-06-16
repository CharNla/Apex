const JournalSection = () => {
  return (
    <div id="blog" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">บทความ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            อ่านบทความและข่าวสารล่าสุดจากเรา
          </p>
        </div>
        {/* Journal entries can be added here */}
      </div>
    </div>
  );
};

export default JournalSection;
