/* Marketing homepage UI. Inquiries use the existing /apply/ page. */
(() => {
  const vi = {
    skip: "Đến nội dung chính",
    preview:
      "Bản xem trước thiết kế. Trang web GoodRise chính thức chưa thay đổi.",
    homeLabel: "Trang chủ GoodRise Canada",
    navLabel: "Điều hướng chính",
    navStory: "Câu chuyện của Omar",
    navUpdates: "Cập nhật cho khách",
    navTools: "Công cụ cho tiệm",
    talk: "Trao đổi thêm",
    menu: "Menu",
    heroEyebrow: "Hợp tác cùng tiệm nail",
    heroTitle: "Giúp Omar.\nGắn kết khách hàng.",
    heroBody:
      "Đồng hành cùng Omar và anh chị em, để khách hàng theo dõi sự hỗ trợ mà tiệm bạn góp phần mang lại.",
    heroCta: "Tìm hiểu cách hoạt động",
    familyAlt: "Omar cùng anh chị em mỉm cười",
    familyCaption:
      "Omar và anh chị em, gia đình mà chương trình hợp tác này đồng hành hỗ trợ.",
    storyTitle: "Thực phẩm và nước uống.\nHỗ trợ đều đặn, lâu dài.",
    storyBody:
      "GoodRise Canada bảo trợ Omar và anh chị em tại Gambia. Mỗi tháng, chúng tôi gửi hỗ trợ để gia đình mua thực phẩm và nước uống.",
    storyPartner:
      "Khi tiệm hợp tác với GoodRise, chúng tôi thay mặt tiệm duy trì sự hỗ trợ này. Khách hàng có thể cùng tiệm theo dõi hành trình đó.",
    storyNote:
      "Sự hỗ trợ thuộc chương trình hợp tác, không phải khoản quyên góp cố định gắn với mỗi lịch hẹn.",
    journeyTitle: "Một lần ghé tiệm. Một hành trình gắn kết.",
    journeyBody:
      "Một câu chuyện để khách theo dõi giữa các lần hẹn, và thêm một lý do để cảm thấy gắn bó với tiệm.",
    step1Title: "Quét mã tại tiệm",
    step1Body:
      "Bảng trưng bày giới thiệu sự hợp tác và mời khách quét mã QR của tiệm.",
    step2Title: "Vào trang web của tiệm",
    step2Body:
      "Khách vào trang web được thiết kế riêng cho tiệm và tìm hiểu tiệm đang đồng hành như thế nào.",
    step3Title: "Chọn đăng ký nhận tin",
    step3Body:
      "Khách tự nguyện đăng ký nhận email cập nhật và có thể hủy đăng ký bất cứ lúc nào.",
    step4Title: "Theo dõi hằng tháng",
    step4Body:
      "Các bản tin mang tên và logo của tiệm cho thấy sự hỗ trợ được duy trì ra sao.",
    starterTitle: "Vật phẩm trưng bày ngay tại tiệm.",
    starterBody:
      "Chúng tôi chuẩn bị bảng mã QR và ảnh của các em, giúp tiệm dễ dàng giới thiệu câu chuyện với khách.",
    starterNote:
      "Mẫu bảng hiện có sử dụng hình minh họa. Vật phẩm của tiệm sẽ được điều chỉnh riêng.",
    enlarge: "Xem ảnh lớn",
    posterAlt: "Mẫu bảng mã QR đứng dành cho tiệm đối tác",
    posterCaption: "Bảng mã QR đứng",
    collageAlt: "Ảnh in của các em được xếp thành hình trái tim",
    collageCaption: "Những bức ảnh mang câu chuyện đến tiệm",
    updatesEyebrow: "Tiệm bạn. Một phần câu chuyện của các em.",
    updatesTitle: "Duy trì sự gắn kết.",
    updatesBody:
      "Mỗi tháng, khách nhận được bản tin có ảnh và câu chuyện mới, mang tên và logo của tiệm cùng GoodRise.",
    updatePoint1: "Cập nhật thực tế về sự hỗ trợ đang tiếp diễn",
    updatePoint2: "GoodRise chuẩn bị và gửi sau khi bạn duyệt",
    updatePoint3: "Chỉ gửi cho khách đã đăng ký",
    updatesNote:
      "Đây là bố cục minh họa dựa trên mẫu email, không phải chiến dịch đã gửi cho khách. Ảnh được lấy từ tư liệu có sẵn.",
    sampleLabel: "Email minh họa gửi khách hàng",
    emailAria: "Ví dụ bản tin cập nhật hằng tháng",
    salonLogo: "Logo tiệm bạn",
    emailSender: "Bản tin từ tiệm bạn và GoodRise Canada",
    emailTitle: "Gần hơn với câu chuyện của Omar.",
    emailBody:
      "Thông qua sự hợp tác với GoodRise Canada, hỗ trợ đều đặn hằng tháng giúp Omar và anh chị em mua thực phẩm và nước uống.",
    emailPhotoAlt: "Ảnh tư liệu của Omar cùng anh chị em",
    emailClosing:
      "Cảm ơn bạn đã chọn tiệm và cùng chúng tôi theo dõi hành trình này.",
    emailArchive: "Ảnh tư liệu. Nội dung minh họa để xem xét.",
    emailFooter:
      "Dành cho khách đã đăng ký • Có thể hủy đăng ký bất cứ lúc nào",
    handledTitle: "Bạn chăm lo cho tiệm.\nChúng tôi lo phần này.",
    handledBody:
      "Bạn không cần trở thành nhà thiết kế, người sáng tạo nội dung hay chuyên gia kỹ thuật để tham gia chương trình.",
    weHandle: "GoodRise phụ trách",
    handle1: "Chuẩn bị bảng trưng bày, thiết lập trang web và phần mềm",
    handle2: "Soạn và gửi bản tin hằng tháng sau khi bạn duyệt",
    handle3: "Hướng dẫn nhân viên, bảo trì và hỗ trợ kỹ thuật",
    yourPart: "Phần việc của bạn rất đơn giản",
    yourPartBody:
      "Cung cấp thông tin tiệm, nhập thông tin khách hàng và duyệt nội dung trước khi chia sẻ. Chúng tôi lo nội dung và công việc kỹ thuật.",
    toolsTitle: "Hiểu rõ hơn về tiệm của bạn.",
    toolsBody:
      "Các công cụ đơn giản giúp bạn biết điều gì đang hiệu quả và lên kế hoạch tiếp theo. Mục tiêu: giúp khách mới trở thành khách quen.",
    toolTabsLabel: "Chọn công cụ cho tiệm",
    serviceTab: "Doanh thu dịch vụ",
    busyTab: "Giờ đông và vắng",
    scheduleTab: "Lịch làm hằng tuần",
    staffTab: "Doanh thu nhân viên",
    serviceTitle: "Biết dịch vụ nào mang lại doanh thu",
    serviceBody:
      "Dựa vào doanh thu đã ghi nhận để chọn dịch vụ nên giới thiệu.",
    serviceAlt:
      "Dữ liệu mẫu so sánh doanh thu các dịch vụ làm móng chân, móng tay và đắp bột nhúng",
    busyTitle: "Lên kế hoạch cho giờ đông và vắng",
    busyBody:
      "Dựa vào thời điểm khách đến để bố trí nhân viên và lên ưu đãi cho giờ vắng.",
    busyAlt: "Dữ liệu mẫu so sánh lượt ghé vào buổi chiều, sáng và tối",
    scheduleTitle: "Quản lý lịch làm việc tại một nơi",
    scheduleBody:
      "Lịch chung hằng tuần cho thấy rõ ai làm việc và vào thời gian nào.",
    scheduleAlt:
      "Lịch mẫu cho thấy giờ làm việc thứ Hai của Annie, Jade và Jennifer",
    staffTitle: "Hiểu công việc của từng nhân viên",
    staffBody:
      "Xem dịch vụ đã hoàn thành và doanh thu được ghi nhận cho từng người.",
    staffAlt:
      "Dữ liệu mẫu về doanh thu và dịch vụ đã hoàn thành của Milan, Jade và Annie",
    toolsNote:
      "Ảnh màn hình dùng dữ liệu minh họa, không phải kết quả được cam kết. Giao diện phần mềm gốc bằng tiếng Anh.",
    exploreDemo: "Khám phá bản demo phần mềm",
    meetingTitle: "Có phù hợp với tiệm bạn không?",
    meetingBody:
      "Cùng trao đổi ngắn về tiệm, câu chuyện của các em và những gì chúng tôi có thể thiết lập cho bạn.",
    meetingNote: "Chúng ta sẽ trao đổi chi tiết và giá trong buổi gặp.",
    formTitle: "Trao đổi thêm",
    formNote: "Giới thiệu đôi nét về tiệm qua trang liên hệ của chúng tôi. Chúng ta có thể trao đổi về chương trình hợp tác và sắp xếp một buổi gặp ngắn.",
    nameLabel: "Tên của bạn",
    businessLabel: "Tên tiệm",
    emailLabel: "Email",
    formButton: "Hẹn trao đổi ngắn",
    formSuccess:
      "Yêu cầu mẫu đã sẵn sàng. Bản demo này không gửi hay lưu thông tin của bạn. Khi triển khai chính thức, đây sẽ là nơi gửi yêu cầu trao đổi.",
    tagline: "Cùng vươn lên. Cùng sẻ chia.",
    privacy: "Quyền riêng tư",
    legal:
      "GoodRise Canada là doanh nghiệp hướng đến mục đích xã hội và hiện chưa phải tổ chức từ thiện đã đăng ký. Sự hỗ trợ được xác định theo từng quan hệ hợp tác, không được trình bày như khoản quyên góp từ thiện và không đủ điều kiện cấp biên lai thuế từ thiện.",
    rights: "Bảo lưu mọi quyền.",
    close: "Đóng",
    imageExample:
      "Ví dụ được cung cấp cho bản demo. Chữ trên ảnh gốc bằng tiếng Anh.",
    zoomIn: "Phóng to",
    zoomOut: "Thu vừa khung",
    imageRegion: "Xem ảnh. Khi phóng to, cuộn để xem các phần của ảnh.",
    title: "GoodRise Canada | Gắn kết khách hàng qua tiệm của bạn",
    description:
      "Đồng hành cùng Omar và anh chị em qua tiệm của bạn. GoodRise lo bản tin khách hàng hằng tháng, trang web và công cụ quản lý đơn giản.",
  };
  const english = {};
  const textFrom = (node) =>
    Array.from(node.childNodes, (child) =>
      child.nodeName === "BR" ? "\n" : child.textContent.replace(/\s+/g, " "),
    )
      .join("")
      .split("\n")
      .map((line) => line.trim())
      .join("\n");
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    english[node.dataset.i18n] = textFrom(node);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    english[node.dataset.i18nAlt] = node.alt;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    english[node.dataset.i18nAria] = node.getAttribute("aria-label");
  });
  english.title = document.title;
  english.description = document.querySelector(
    'meta[name="description"]',
  ).content;
  english.formSuccess =
    "Your example request is ready. This demo has not sent or saved your information. On the finished site, this is where you would request a conversation.";
  english.zoomOut = "Fit image";
  let language = "en";
  let requestPreviewed = false;
  let lastImageButton;
  const label = (key) =>
    (language === "vi" ? vi[key] : english[key]) || english[key] || "";
  const textInto = (node, text) => {
    const lines = text.split("\n");
    node.replaceChildren();
    lines.forEach((line, index) => {
      if (index) node.append(document.createElement("br"));
      node.append(document.createTextNode(line));
    });
  };
  const languageButton = document.querySelector("#language-toggle");
  const menuButton = document.querySelector(".menu-button");
  const navigation = document.querySelector("#main-nav");
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  };
  function setLanguage(next, updateUrl = true) {
    language = next === "vi" ? "vi" : "en";
    document.documentElement.lang = language === "vi" ? "vi" : "en-CA";
    document
      .querySelectorAll("[data-i18n]")
      .forEach((node) => textInto(node, label(node.dataset.i18n)));
    document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
      node.alt = label(node.dataset.i18nAlt);
    });
    document
      .querySelectorAll("[data-i18n-aria]")
      .forEach((node) =>
        node.setAttribute("aria-label", label(node.dataset.i18nAria)),
      );
    languageButton.textContent = language === "vi" ? "English" : "Tiếng Việt";
    languageButton.lang = language === "vi" ? "en" : "vi";
    languageButton.setAttribute(
      "aria-label",
      language === "vi"
        ? "Read this page in English"
        : "Đọc trang này bằng tiếng Việt",
    );
    document.title = label("title");
    document.querySelector('meta[name="description"]').content =
      label("description");
    document.querySelector('meta[property="og:title"]').content =
      label("title");
    document.querySelector('meta[property="og:description"]').content =
      label("description");
    if (requestPreviewed)
      document.querySelector("#form-status").textContent = label("formSuccess");
    if (updateUrl) {
      const url = new URL(location.href);
      if (language === "vi") url.searchParams.set("lang", "vi");
      else url.searchParams.delete("lang");
      history.replaceState(null, "", url);
    }
    closeMenu();
  }
  languageButton.addEventListener("click", () =>
    setLanguage(language === "en" ? "vi" : "en"),
  );
  window.addEventListener("popstate", () =>
    setLanguage(new URLSearchParams(location.search).get("lang"), false),
  );
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(open));
    navigation.classList.toggle("is-open", open);
    if (open) navigation.querySelector("a").focus();
  });
  navigation
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation.classList.contains("is-open")) {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) closeMenu();
  });
  matchMedia("(min-width: 768px)").addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });
  const showcase = document.querySelector(".tool-showcase");
  const tablist = showcase.querySelector(".tool-tabs");
  const tabs = Array.from(tablist.querySelectorAll("button"));
  const panels = tabs.map((tab) =>
    document.getElementById(tab.getAttribute("aria-controls")),
  );
  const selectTool = (index, focus = false) => {
    tabs.forEach((tab, i) => {
      tab.setAttribute("aria-selected", String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
    });
    if (focus) tabs[index].focus();
  };
  tablist.setAttribute("role", "tablist");
  tablist.setAttribute("aria-orientation", "vertical");
  tabs.forEach((tab, index) => {
    tab.setAttribute("role", "tab");
    panels[index].setAttribute("role", "tabpanel");
    panels[index].setAttribute("aria-labelledby", tab.id);
    tab.addEventListener("click", () => selectTool(index));
    tab.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowDown") next = (index + 1) % tabs.length;
      if (event.key === "ArrowUp")
        next = (index + tabs.length - 1) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        selectTool(next, true);
      }
    });
  });
  selectTool(0);
  showcase.classList.add("is-enhanced");
  tablist.hidden = false;
  const dialog = document.querySelector("#image-dialog");
  const media = dialog.querySelector(".dialog-media");
  const zoom = dialog.querySelector(".zoom-button");
  const resetZoom = () => {
    media.classList.remove("is-zoomed");
    media.scrollTo(0, 0);
    zoom.setAttribute("aria-pressed", "false");
    zoom.textContent = label("zoomIn");
  };
  document.querySelectorAll("[data-image]").forEach((button) =>
    button.addEventListener("click", () => {
      lastImageButton = button;
      document.querySelector("#image-dialog-title").textContent = label(
        button.dataset.imageTitle,
      );
      const image = document.querySelector("#dialog-image");
      image.src = "/goodrise-assets/partnership/" + button.dataset.image;
      image.alt = button.querySelector("img").alt;
      resetZoom();
      dialog.showModal();
    }),
  );
  zoom.addEventListener("click", () => {
    const zoomed = media.classList.toggle("is-zoomed");
    zoom.setAttribute("aria-pressed", String(zoomed));
    zoom.textContent = label(zoomed ? "zoomOut" : "zoomIn");
    if (zoomed) media.focus();
  });
  document
    .querySelector(".close-dialog")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      const r = dialog.getBoundingClientRect();
      if (
        event.clientX < r.left ||
        event.clientX > r.right ||
        event.clientY < r.top ||
        event.clientY > r.bottom
      )
        dialog.close();
    }
  });
  dialog.addEventListener("close", () => lastImageButton?.focus());
  document.querySelector("[data-year]").textContent = String(
    new Date().getFullYear(),
  );
  document.documentElement.classList.add("has-js");
  setLanguage(new URLSearchParams(location.search).get("lang"), false);
})();
