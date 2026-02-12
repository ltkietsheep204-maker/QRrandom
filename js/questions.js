// ===================================================================
// BỘ CÂU HỎI TRẮC NGHIỆM LỊCH SỬ PHONG KIẾN VIỆT NAM (100 câu)
// Bao gồm các triều đại: Ngô, Đinh, Tiền Lê, Lý, Trần, Hồ, 
// Lê sơ, Mạc, Lê trung hưng, Tây Sơn, Nguyễn
// ===================================================================

const QUESTIONS_DB = [
  // ==================== THỜI KỲ DỰNG NƯỚC & NGÔ ====================
  {
    id: 1,
    question: "Ngô Quyền đánh tan quân Nam Hán trên sông Bạch Đằng vào năm nào?",
    options: ["Năm 938", "Năm 939", "Năm 940", "Năm 937"],
    correct: 0,
    category: "Nhà Ngô"
  },
  {
    id: 2,
    question: "Ngô Quyền dùng chiến thuật gì để đánh bại quân Nam Hán?",
    options: ["Cắm cọc nhọn bịt sắt dưới lòng sông", "Đốt thuyền địch", "Mai phục trên bờ", "Dùng voi chiến"],
    correct: 0,
    category: "Nhà Ngô"
  },
  {
    id: 3,
    question: "Ngô Quyền đóng đô ở đâu sau khi lên ngôi?",
    options: ["Cổ Loa", "Hoa Lư", "Đại La", "Phong Châu"],
    correct: 0,
    category: "Nhà Ngô"
  },
  {
    id: 4,
    question: "Sau khi Ngô Quyền mất, đất nước rơi vào tình trạng gì?",
    options: ["Loạn 12 sứ quân", "Bị nhà Tống xâm lược", "Loạn 10 sứ quân", "Bị nhà Nguyên xâm lược"],
    correct: 0,
    category: "Nhà Ngô"
  },
  {
    id: 5,
    question: "Chiến thắng Bạch Đằng năm 938 chấm dứt bao nhiêu năm Bắc thuộc?",
    options: ["Hơn 1000 năm", "Hơn 500 năm", "Hơn 800 năm", "Hơn 1200 năm"],
    correct: 0,
    category: "Nhà Ngô"
  },

  // ==================== NHÀ ĐINH ====================
  {
    id: 6,
    question: "Đinh Bộ Lĩnh dẹp loạn 12 sứ quân và thống nhất đất nước vào năm nào?",
    options: ["Năm 968", "Năm 970", "Năm 965", "Năm 972"],
    correct: 0,
    category: "Nhà Đinh"
  },
  {
    id: 7,
    question: "Đinh Bộ Lĩnh đặt quốc hiệu nước ta là gì?",
    options: ["Đại Cồ Việt", "Đại Việt", "Vạn Xuân", "Đại Nam"],
    correct: 0,
    category: "Nhà Đinh"
  },
  {
    id: 8,
    question: "Kinh đô của nhà Đinh đặt ở đâu?",
    options: ["Hoa Lư", "Cổ Loa", "Thăng Long", "Phú Xuân"],
    correct: 0,
    category: "Nhà Đinh"
  },
  {
    id: 9,
    question: "Biệt danh thời thơ ấu của Đinh Bộ Lĩnh là gì?",
    options: ["Vạn Thắng Vương", "Cờ lau tập trận", "Bộ Lĩnh nhỏ", "Thần đồng"],
    correct: 0,
    category: "Nhà Đinh"
  },
  {
    id: 10,
    question: "Đinh Tiên Hoàng bị ám sát bởi ai?",
    options: ["Đỗ Thích", "Lê Hoàn", "Nguyễn Bặc", "Phạm Cự Lạng"],
    correct: 0,
    category: "Nhà Đinh"
  },

  // ==================== NHÀ TIỀN LÊ ====================
  {
    id: 11,
    question: "Lê Hoàn lên ngôi vua, lập ra triều đại nào?",
    options: ["Tiền Lê", "Hậu Lê", "Lê sơ", "Lê trung hưng"],
    correct: 0,
    category: "Nhà Tiền Lê"
  },
  {
    id: 12,
    question: "Lê Hoàn đánh tan quân Tống xâm lược vào năm nào?",
    options: ["Năm 981", "Năm 980", "Năm 982", "Năm 979"],
    correct: 0,
    category: "Nhà Tiền Lê"
  },
  {
    id: 13,
    question: "Trận đánh nổi tiếng của Lê Hoàn chống quân Tống diễn ra ở đâu?",
    options: ["Chi Lăng", "Bạch Đằng", "Đống Đa", "Rạch Gầm"],
    correct: 0,
    category: "Nhà Tiền Lê"
  },
  {
    id: 14,
    question: "Lê Đại Hành có tên húy là gì?",
    options: ["Lê Hoàn", "Lê Long Đĩnh", "Lê Ngọa Triều", "Lê Lợi"],
    correct: 0,
    category: "Nhà Tiền Lê"
  },
  {
    id: 15,
    question: "Vị vua cuối cùng của nhà Tiền Lê nổi tiếng tàn bạo có biệt danh gì?",
    options: ["Lê Ngọa Triều", "Lê Bạo Vương", "Lê Ác Đế", "Lê Tàn Quân"],
    correct: 0,
    category: "Nhà Tiền Lê"
  },

  // ==================== NHÀ LÝ ====================
  {
    id: 16,
    question: "Lý Công Uẩn lên ngôi vua năm nào?",
    options: ["Năm 1009", "Năm 1010", "Năm 1008", "Năm 1011"],
    correct: 0,
    category: "Nhà Lý"
  },
  {
    id: 17,
    question: "Nhà Lý dời đô từ Hoa Lư về đâu?",
    options: ["Đại La (Thăng Long)", "Phú Xuân", "Cổ Loa", "Thanh Hóa"],
    correct: 0,
    category: "Nhà Lý"
  },
  {
    id: 18,
    question: "Chiếu dời đô được Lý Công Uẩn ban hành năm nào?",
    options: ["Năm 1010", "Năm 1009", "Năm 1011", "Năm 1012"],
    correct: 0,
    category: "Nhà Lý"
  },
  {
    id: 19,
    question: "Lý Thường Kiệt đánh sang đất Tống tấn công thành nào?",
    options: ["Ung Châu và Khâm Châu", "Quảng Châu", "Nam Ninh", "Phúc Kiến"],
    correct: 0,
    category: "Nhà Lý"
  },
  {
    id: 20,
    question: "Bài thơ 'Nam quốc sơn hà' được cho là của ai?",
    options: ["Lý Thường Kiệt", "Lý Công Uẩn", "Trần Hưng Đạo", "Lê Lợi"],
    correct: 0,
    category: "Nhà Lý"
  },
  {
    id: 21,
    question: "Nhà Lý tồn tại trong khoảng thời gian nào?",
    options: ["1009 - 1225", "1009 - 1200", "1010 - 1225", "1009 - 1250"],
    correct: 0,
    category: "Nhà Lý"
  },
  {
    id: 22,
    question: "Trận phòng tuyến sông Như Nguyệt do ai chỉ huy?",
    options: ["Lý Thường Kiệt", "Lý Công Uẩn", "Tô Hiến Thành", "Lý Nhân Tông"],
    correct: 0,
    category: "Nhà Lý"
  },
  {
    id: 23,
    question: "Văn Miếu - Quốc Tử Giám được xây dựng dưới thời vua nào?",
    options: ["Lý Thánh Tông", "Lý Thái Tổ", "Lý Nhân Tông", "Lý Thái Tông"],
    correct: 0,
    category: "Nhà Lý"
  },
  {
    id: 24,
    question: "Quốc Tử Giám được thành lập năm nào?",
    options: ["Năm 1076", "Năm 1070", "Năm 1075", "Năm 1080"],
    correct: 0,
    category: "Nhà Lý"
  },
  {
    id: 25,
    question: "Nhà Lý đổi tên nước từ Đại Cồ Việt thành gì?",
    options: ["Đại Việt", "Đại Nam", "Việt Nam", "An Nam"],
    correct: 0,
    category: "Nhà Lý"
  },
  {
    id: 26,
    question: "Lý Chiêu Hoàng - vị vua cuối cùng nhà Lý nhường ngôi cho ai?",
    options: ["Trần Cảnh", "Trần Thủ Độ", "Trần Thái Tông", "Trần Nhân Tông"],
    correct: 0,
    category: "Nhà Lý"
  },
  {
    id: 27,
    question: "Chùa Một Cột được xây dựng dưới triều vua nào?",
    options: ["Lý Thái Tông", "Lý Thánh Tông", "Lý Thái Tổ", "Lý Nhân Tông"],
    correct: 0,
    category: "Nhà Lý"
  },
  {
    id: 28,
    question: "Tô Hiến Thành là đại thần nổi tiếng thời nhà Lý, ông nổi tiếng vì điều gì?",
    options: ["Trung thực, liêm khiết", "Giỏi đánh trận", "Viết sử", "Xây dựng thành lũy"],
    correct: 0,
    category: "Nhà Lý"
  },

  // ==================== NHÀ TRẦN ====================
  {
    id: 29,
    question: "Nhà Trần được thành lập năm nào?",
    options: ["Năm 1225", "Năm 1226", "Năm 1224", "Năm 1230"],
    correct: 0,
    category: "Nhà Trần"
  },
  {
    id: 30,
    question: "Quân Mông - Nguyên xâm lược Đại Việt bao nhiêu lần?",
    options: ["3 lần", "2 lần", "4 lần", "1 lần"],
    correct: 0,
    category: "Nhà Trần"
  },
  {
    id: 31,
    question: "Trần Hưng Đạo có tên thật là gì?",
    options: ["Trần Quốc Tuấn", "Trần Quốc Toản", "Trần Quang Khải", "Trần Khánh Dư"],
    correct: 0,
    category: "Nhà Trần"
  },
  {
    id: 32,
    question: "Hịch tướng sĩ là tác phẩm của ai?",
    options: ["Trần Hưng Đạo", "Trần Nhân Tông", "Trần Thái Tông", "Trần Quang Khải"],
    correct: 0,
    category: "Nhà Trần"
  },
  {
    id: 33,
    question: "Chiến thắng Bạch Đằng lần thứ hai (thời Trần) diễn ra năm nào?",
    options: ["Năm 1288", "Năm 1285", "Năm 1287", "Năm 1289"],
    correct: 0,
    category: "Nhà Trần"
  },
  {
    id: 34,
    question: "Hội nghị Diên Hồng được tổ chức dưới thời vua nào?",
    options: ["Trần Nhân Tông", "Trần Thái Tông", "Trần Thánh Tông", "Trần Anh Tông"],
    correct: 0,
    category: "Nhà Trần"
  },
  {
    id: 35,
    question: "Hội nghị Diên Hồng có mục đích gì?",
    options: ["Hỏi ý kiến bô lão nên đánh hay hòa", "Bàn kế hoạch xây thành", "Phong tước cho quan lại", "Cải cách ruộng đất"],
    correct: 0,
    category: "Nhà Trần"
  },
  {
    id: 36,
    question: "Trần Quốc Toản nổi tiếng với câu chuyện gì?",
    options: ["Bóp nát quả cam vì không được dự bàn việc nước", "Cưỡi voi ra trận", "Viết hịch tướng sĩ", "Đánh trận Bạch Đằng"],
    correct: 0,
    category: "Nhà Trần"
  },
  {
    id: 37,
    question: "Nhà Trần thực hiện chế độ gì đặc biệt trong việc truyền ngôi?",
    options: ["Thái thượng hoàng (vua cha nhường ngôi sớm)", "Truyền ngôi cho em", "Bầu cử vua", "Truyền ngôi cho con gái"],
    correct: 0,
    category: "Nhà Trần"
  },
  {
    id: 38,
    question: "Trần Nhân Tông sau khi thoái vị đã làm gì?",
    options: ["Xuất gia, lập phái Trúc Lâm Yên Tử", "Đi sứ sang Trung Quốc", "Trở thành tướng quân", "Viết sách lịch sử"],
    correct: 0,
    category: "Nhà Trần"
  },
  {
    id: 39,
    question: "Câu nói 'Đầu thần chưa rơi xuống đất, xin bệ hạ đừng lo' là của ai?",
    options: ["Trần Thủ Độ", "Trần Hưng Đạo", "Trần Bình Trọng", "Phạm Ngũ Lão"],
    correct: 0,
    category: "Nhà Trần"
  },
  {
    id: 40,
    question: "Câu nói 'Ta thà làm quỷ nước Nam còn hơn làm vương đất Bắc' là của ai?",
    options: ["Trần Bình Trọng", "Trần Hưng Đạo", "Trần Nhân Tông", "Phạm Ngũ Lão"],
    correct: 0,
    category: "Nhà Trần"
  },
  {
    id: 41,
    question: "Bộ sử 'Đại Việt sử ký' được ai biên soạn thời Trần?",
    options: ["Lê Văn Hưu", "Ngô Sĩ Liên", "Phan Huy Chú", "Trần Nhân Tông"],
    correct: 0,
    category: "Nhà Trần"
  },
  {
    id: 42,
    question: "Nhà Trần kết thúc vào năm nào?",
    options: ["Năm 1400", "Năm 1407", "Năm 1399", "Năm 1401"],
    correct: 0,
    category: "Nhà Trần"
  },
  {
    id: 43,
    question: "Phạm Ngũ Lão nổi tiếng với bài thơ nào?",
    options: ["Thuật hoài", "Cảm hoài", "Tỏ lòng", "Hịch tướng sĩ"],
    correct: 0,
    category: "Nhà Trần"
  },
  {
    id: 44,
    question: "Chiến thuật chính của nhà Trần chống quân Mông - Nguyên là gì?",
    options: ["Vườn không nhà trống, tiêu thổ kháng chiến", "Đánh chính diện", "Xây thành lũy kiên cố", "Cầu viện nước ngoài"],
    correct: 0,
    category: "Nhà Trần"
  },

  // ==================== NHÀ HỒ ====================
  {
    id: 45,
    question: "Hồ Quý Ly cướp ngôi nhà Trần, lập ra nhà Hồ năm nào?",
    options: ["Năm 1400", "Năm 1401", "Năm 1399", "Năm 1402"],
    correct: 0,
    category: "Nhà Hồ"
  },
  {
    id: 46,
    question: "Hồ Quý Ly đổi quốc hiệu thành gì?",
    options: ["Đại Ngu", "Đại Việt", "Đại Hồ", "Đại Nam"],
    correct: 0,
    category: "Nhà Hồ"
  },
  {
    id: 47,
    question: "Hồ Quý Ly dời đô về đâu?",
    options: ["Tây Đô (Thanh Hóa)", "Đông Đô", "Phú Xuân", "Hoa Lư"],
    correct: 0,
    category: "Nhà Hồ"
  },
  {
    id: 48,
    question: "Nhà Hồ tồn tại trong bao lâu?",
    options: ["7 năm (1400-1407)", "10 năm", "5 năm", "15 năm"],
    correct: 0,
    category: "Nhà Hồ"
  },
  {
    id: 49,
    question: "Cải cách nổi bật nào được Hồ Quý Ly thực hiện?",
    options: ["Phát hành tiền giấy", "Xây dựng hải quân", "Mở khoa thi võ", "Lập viện nghiên cứu"],
    correct: 0,
    category: "Nhà Hồ"
  },
  {
    id: 50,
    question: "Thành nhà Hồ (nay thuộc Thanh Hóa) được xây bằng vật liệu gì?",
    options: ["Đá khối lớn", "Gạch nung", "Gỗ lim", "Đất nện"],
    correct: 0,
    category: "Nhà Hồ"
  },

  // ==================== THỜI THUỘC MINH & KHỞI NGHĨA LAM SƠN ====================
  {
    id: 51,
    question: "Nhà Minh đô hộ nước ta trong giai đoạn nào?",
    options: ["1407 - 1427", "1400 - 1420", "1407 - 1430", "1410 - 1427"],
    correct: 0,
    category: "Thời thuộc Minh"
  },
  {
    id: 52,
    question: "Lê Lợi phát động khởi nghĩa Lam Sơn vào năm nào?",
    options: ["Năm 1418", "Năm 1417", "Năm 1420", "Năm 1415"],
    correct: 0,
    category: "Khởi nghĩa Lam Sơn"
  },
  {
    id: 53,
    question: "Ai là quân sư chính của Lê Lợi trong khởi nghĩa Lam Sơn?",
    options: ["Nguyễn Trãi", "Lê Lai", "Nguyễn Xí", "Đinh Liệt"],
    correct: 0,
    category: "Khởi nghĩa Lam Sơn"
  },
  {
    id: 54,
    question: "Lê Lai nổi tiếng với sự kiện gì?",
    options: ["Liều mình cứu chúa (giả làm Lê Lợi)", "Viết Bình Ngô đại cáo", "Đánh trận Chi Lăng", "Cắm cọc sông Bạch Đằng"],
    correct: 0,
    category: "Khởi nghĩa Lam Sơn"
  },
  {
    id: 55,
    question: "Trận Chi Lăng - Xương Giang năm 1427 đánh bại tướng Minh nào?",
    options: ["Liễu Thăng", "Vương Thông", "Mộc Thạnh", "Trương Phụ"],
    correct: 0,
    category: "Khởi nghĩa Lam Sơn"
  },
  {
    id: 56,
    question: "'Bình Ngô đại cáo' được ai viết?",
    options: ["Nguyễn Trãi", "Lê Lợi", "Lê Lai", "Nguyễn Xí"],
    correct: 0,
    category: "Khởi nghĩa Lam Sơn"
  },
  {
    id: 57,
    question: "Bình Ngô đại cáo được ví như bản gì của dân tộc?",
    options: ["Tuyên ngôn độc lập", "Hiến pháp", "Luật hình sự", "Bản đồ quốc gia"],
    correct: 0,
    category: "Khởi nghĩa Lam Sơn"
  },

  // ==================== NHÀ LÊ SƠ ====================
  {
    id: 58,
    question: "Lê Lợi lên ngôi vua, lấy niên hiệu gì?",
    options: ["Thuận Thiên", "Quang Thuận", "Hồng Đức", "Cảnh Hưng"],
    correct: 0,
    category: "Nhà Lê sơ"
  },
  {
    id: 59,
    question: "Vua nào nhà Lê sơ được coi là vị vua anh minh nhất?",
    options: ["Lê Thánh Tông", "Lê Thái Tổ", "Lê Nhân Tông", "Lê Hiến Tông"],
    correct: 0,
    category: "Nhà Lê sơ"
  },
  {
    id: 60,
    question: "Bộ luật Hồng Đức được ban hành dưới thời vua nào?",
    options: ["Lê Thánh Tông", "Lê Thái Tổ", "Lê Hiến Tông", "Lê Thái Tông"],
    correct: 0,
    category: "Nhà Lê sơ"
  },
  {
    id: 61,
    question: "Luật Hồng Đức có điểm tiến bộ nào nổi bật?",
    options: ["Bảo vệ quyền lợi phụ nữ", "Cho phép buôn bán nô lệ", "Bãi bỏ khoa cử", "Cấm thương mại"],
    correct: 0,
    category: "Nhà Lê sơ"
  },
  {
    id: 62,
    question: "Dưới thời Lê Thánh Tông, cả nước chia thành bao nhiêu đạo thừa tuyên?",
    options: ["13 đạo", "10 đạo", "15 đạo", "12 đạo"],
    correct: 0,
    category: "Nhà Lê sơ"
  },
  {
    id: 63,
    question: "Hội Tao Đàn do ai sáng lập?",
    options: ["Lê Thánh Tông", "Nguyễn Trãi", "Lê Thái Tổ", "Ngô Sĩ Liên"],
    correct: 0,
    category: "Nhà Lê sơ"
  },
  {
    id: 64,
    question: "Ngô Sĩ Liên biên soạn bộ sử nào nổi tiếng?",
    options: ["Đại Việt sử ký toàn thư", "Đại Việt sử ký", "Việt sử lược", "Khâm định Việt sử"],
    correct: 0,
    category: "Nhà Lê sơ"
  },
  {
    id: 65,
    question: "Lê Thánh Tông cầm quân đánh Chiêm Thành vào năm nào?",
    options: ["Năm 1471", "Năm 1470", "Năm 1472", "Năm 1475"],
    correct: 0,
    category: "Nhà Lê sơ"
  },

  // ==================== NHÀ MẠC ====================
  {
    id: 66,
    question: "Mạc Đăng Dung cướp ngôi nhà Lê, lập ra nhà Mạc năm nào?",
    options: ["Năm 1527", "Năm 1526", "Năm 1528", "Năm 1530"],
    correct: 0,
    category: "Nhà Mạc"
  },
  {
    id: 67,
    question: "Thời kỳ Nam - Bắc triều là cuộc đối đầu giữa hai thế lực nào?",
    options: ["Nhà Mạc (Bắc) và nhà Lê trung hưng (Nam)", "Nhà Trần và nhà Hồ", "Chúa Trịnh và Chúa Nguyễn", "Nhà Lý và nhà Trần"],
    correct: 0,
    category: "Nhà Mạc"
  },
  {
    id: 68,
    question: "Nhà Mạc đóng đô ở đâu?",
    options: ["Thăng Long", "Cao Bằng", "Thanh Hóa", "Hoa Lư"],
    correct: 0,
    category: "Nhà Mạc"
  },

  // ==================== LÊ TRUNG HƯNG - TRỊNH NGUYỄN ====================
  {
    id: 69,
    question: "Ai là người khôi phục nhà Lê, mở đầu thời Lê trung hưng?",
    options: ["Nguyễn Kim", "Trịnh Kiểm", "Trịnh Tùng", "Nguyễn Hoàng"],
    correct: 0,
    category: "Lê trung hưng"
  },
  {
    id: 70,
    question: "Thời Trịnh - Nguyễn phân tranh kéo dài bao lâu?",
    options: ["Khoảng 200 năm", "Khoảng 100 năm", "Khoảng 50 năm", "Khoảng 300 năm"],
    correct: 0,
    category: "Trịnh - Nguyễn"
  },
  {
    id: 71,
    question: "Sông nào là ranh giới chia cắt Đàng Trong và Đàng Ngoài?",
    options: ["Sông Gianh", "Sông Hồng", "Sông Mã", "Sông Hương"],
    correct: 0,
    category: "Trịnh - Nguyễn"
  },
  {
    id: 72,
    question: "Chúa Nguyễn Hoàng vào Nam xây dựng cơ nghiệp theo lời khuyên của ai?",
    options: ["Nguyễn Bỉnh Khiêm", "Trịnh Kiểm", "Nguyễn Kim", "Phùng Khắc Khoan"],
    correct: 0,
    category: "Trịnh - Nguyễn"
  },
  {
    id: 73,
    question: "Câu sấm 'Hoành Sơn nhất đái, vạn đại dung thân' là của ai?",
    options: ["Nguyễn Bỉnh Khiêm", "Trạng Trình", "Chu Văn An", "Lê Quý Đôn"],
    correct: 0,
    category: "Trịnh - Nguyễn"
  },
  {
    id: 74,
    question: "Đàng Trong do ai cai trị?",
    options: ["Chúa Nguyễn", "Chúa Trịnh", "Vua Lê", "Nhà Mạc"],
    correct: 0,
    category: "Trịnh - Nguyễn"
  },
  {
    id: 75,
    question: "Đàng Ngoài do thế lực nào nắm thực quyền?",
    options: ["Chúa Trịnh", "Vua Lê", "Chúa Nguyễn", "Nhà Mạc"],
    correct: 0,
    category: "Trịnh - Nguyễn"
  },
  {
    id: 76,
    question: "Chữ Quốc ngữ bắt đầu được truyền giáo sĩ phương Tây tạo ra vào thời kỳ nào?",
    options: ["Thế kỷ 17 (thời Trịnh - Nguyễn)", "Thế kỷ 15", "Thế kỷ 19", "Thế kỷ 13"],
    correct: 0,
    category: "Trịnh - Nguyễn"
  },
  {
    id: 77,
    question: "Lê Quý Đôn là nhà bác học nổi tiếng thời nào?",
    options: ["Lê trung hưng", "Nhà Lý", "Nhà Trần", "Nhà Nguyễn"],
    correct: 0,
    category: "Lê trung hưng"
  },

  // ==================== TÂY SƠN ====================
  {
    id: 78,
    question: "Phong trào Tây Sơn do ba anh em nào lãnh đạo?",
    options: ["Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ", "Nguyễn Huệ, Nguyễn Ánh, Nguyễn Lữ", "Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Ánh", "Nguyễn Nhạc, Nguyễn Lữ, Nguyễn Phúc"],
    correct: 0,
    category: "Tây Sơn"
  },
  {
    id: 79,
    question: "Phong trào Tây Sơn khởi nghĩa năm nào?",
    options: ["Năm 1771", "Năm 1770", "Năm 1772", "Năm 1775"],
    correct: 0,
    category: "Tây Sơn"
  },
  {
    id: 80,
    question: "Nguyễn Huệ đại phá quân Thanh trong trận nào?",
    options: ["Trận Ngọc Hồi - Đống Đa", "Trận Rạch Gầm - Xoài Mút", "Trận Chi Lăng", "Trận Bạch Đằng"],
    correct: 0,
    category: "Tây Sơn"
  },
  {
    id: 81,
    question: "Nguyễn Huệ đánh tan quân Thanh vào dịp Tết năm nào?",
    options: ["Tết Kỷ Dậu 1789", "Tết Mậu Thân 1788", "Tết Canh Tuất 1790", "Tết Nhâm Tý 1792"],
    correct: 0,
    category: "Tây Sơn"
  },
  {
    id: 82,
    question: "Trận Rạch Gầm - Xoài Mút (1785) đánh bại quân nước nào?",
    options: ["Xiêm (Thái Lan)", "Trung Quốc", "Miến Điện", "Campuchia"],
    correct: 0,
    category: "Tây Sơn"
  },
  {
    id: 83,
    question: "Quang Trung Nguyễn Huệ lên ngôi hoàng đế năm nào?",
    options: ["Năm 1788", "Năm 1789", "Năm 1787", "Năm 1790"],
    correct: 0,
    category: "Tây Sơn"
  },
  {
    id: 84,
    question: "Tướng nhà Thanh chỉ huy 29 vạn quân xâm lược Đại Việt là ai?",
    options: ["Tôn Sĩ Nghị", "Càn Long", "Phúc Khang An", "Hứa Thế Hanh"],
    correct: 0,
    category: "Tây Sơn"
  },
  {
    id: 85,
    question: "Quang Trung mất năm nào?",
    options: ["Năm 1792", "Năm 1793", "Năm 1791", "Năm 1795"],
    correct: 0,
    category: "Tây Sơn"
  },
  {
    id: 86,
    question: "Nguyễn Huệ hành quân thần tốc từ đâu ra Thăng Long đánh quân Thanh?",
    options: ["Phú Xuân (Huế)", "Quy Nhơn", "Gia Định", "Thanh Hóa"],
    correct: 0,
    category: "Tây Sơn"
  },
  {
    id: 87,
    question: "Phong trào Tây Sơn có công lớn nhất trong việc gì?",
    options: ["Xóa bỏ tình trạng chia cắt Đàng Trong - Đàng Ngoài", "Xây dựng kinh đô mới", "Mở mang bờ cõi phía Nam", "Cải cách ruộng đất"],
    correct: 0,
    category: "Tây Sơn"
  },

  // ==================== NHÀ NGUYỄN ====================
  {
    id: 88,
    question: "Nguyễn Ánh thống nhất đất nước, lập ra nhà Nguyễn năm nào?",
    options: ["Năm 1802", "Năm 1800", "Năm 1803", "Năm 1805"],
    correct: 0,
    category: "Nhà Nguyễn"
  },
  {
    id: 89,
    question: "Nguyễn Ánh lên ngôi lấy niên hiệu gì?",
    options: ["Gia Long", "Minh Mạng", "Thiệu Trị", "Tự Đức"],
    correct: 0,
    category: "Nhà Nguyễn"
  },
  {
    id: 90,
    question: "Kinh đô nhà Nguyễn đặt ở đâu?",
    options: ["Phú Xuân (Huế)", "Thăng Long", "Gia Định", "Thanh Hóa"],
    correct: 0,
    category: "Nhà Nguyễn"
  },
  {
    id: 91,
    question: "Nhà Nguyễn đặt quốc hiệu nước ta là gì?",
    options: ["Việt Nam (sau đổi thành Đại Nam)", "Đại Việt", "An Nam", "Đại Cồ Việt"],
    correct: 0,
    category: "Nhà Nguyễn"
  },
  {
    id: 92,
    question: "Quần thể di tích cố đô Huế được UNESCO công nhận là Di sản Văn hóa Thế giới năm nào?",
    options: ["Năm 1993", "Năm 1995", "Năm 1990", "Năm 2000"],
    correct: 0,
    category: "Nhà Nguyễn"
  },
  {
    id: 93,
    question: "Vua Minh Mạng nổi tiếng với việc gì?",
    options: ["Cải cách hành chính, chia cả nước thành các tỉnh", "Xây dựng Văn Miếu", "Đánh bại quân Thanh", "Mở cửa giao thương với phương Tây"],
    correct: 0,
    category: "Nhà Nguyễn"
  },
  {
    id: 94,
    question: "Ai là vị vua cuối cùng của triều Nguyễn?",
    options: ["Bảo Đại", "Khải Định", "Duy Tân", "Thành Thái"],
    correct: 0,
    category: "Nhà Nguyễn"
  },
  {
    id: 95,
    question: "Nhà Nguyễn có tổng cộng bao nhiêu đời vua?",
    options: ["13 đời vua", "12 đời vua", "14 đời vua", "10 đời vua"],
    correct: 0,
    category: "Nhà Nguyễn"
  },

  // ==================== VĂN HÓA - XÃ HỘI PHONG KIẾN ====================
  {
    id: 96,
    question: "Khoa cử (thi cử) ở Việt Nam thời phong kiến chịu ảnh hưởng của học thuyết nào?",
    options: ["Nho giáo", "Phật giáo", "Đạo giáo", "Pháp gia"],
    correct: 0,
    category: "Văn hóa phong kiến"
  },
  {
    id: 97,
    question: "Trạng nguyên là danh hiệu dành cho ai?",
    options: ["Người đỗ đầu kỳ thi Đình", "Người đỗ đầu kỳ thi Hương", "Người đỗ đầu kỳ thi Hội", "Người có công đánh giặc"],
    correct: 0,
    category: "Văn hóa phong kiến"
  },
  {
    id: 98,
    question: "Chu Văn An nổi tiếng với hành động gì?",
    options: ["Dâng sớ xin chém 7 nịnh thần (Thất trảm sớ)", "Viết Bình Ngô đại cáo", "Đánh bại quân Mông Cổ", "Xây dựng Văn Miếu"],
    correct: 0,
    category: "Văn hóa phong kiến"
  },
  {
    id: 99,
    question: "Hệ thống ruộng đất 'điền trang thái ấp' phổ biến ở triều đại nào?",
    options: ["Nhà Trần", "Nhà Lý", "Nhà Lê", "Nhà Nguyễn"],
    correct: 0,
    category: "Văn hóa phong kiến"
  },
  {
    id: 100,
    question: "Bia Tiến sĩ ở Văn Miếu ghi danh các tiến sĩ đặt trên lưng con vật nào?",
    options: ["Rùa", "Rồng", "Hạc", "Kỳ lân"],
    correct: 0,
    category: "Văn hóa phong kiến"
  }
];

// Export cho module
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUESTIONS_DB;
}
