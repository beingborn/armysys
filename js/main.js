// 데이터피커
$(".input-group").each(function (index) {
  var datepickerId = "datepicker" + index; // 고유한 ID 생성
  var input = $(this).find(".datepicker-input"); // input 필드 선택
  input.attr("id", datepickerId); // 고유 ID 부여

  // datepicker 초기화
  input.datepicker({
    format: "yyyy-mm-dd", // 날짜 형식
    todayHighlight: true, // 오늘 날짜 하이라이트
    autoclose: true, // 날짜 선택 후 자동으로 닫힘
    language: "ko", // 한글 적용
  });

  // div 태그 클릭 시 datepicker 열기
  $(this).on("click", function () {
    input.focus(); // input에 focus 주어 달력 열림
  });

  // span 태그 클릭 시 datepicker 열기
  $(this)
    .find(".input-group-text")
    .on("click", function () {
      input.focus(); // input에 focus 주어 달력 열림
    });
});

// 데이터 테이블
if ($("#dataTable").length) {
  $("#dataTable").DataTable();
}

// 로그인 폼
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const formContainer = document.getElementById("formContainer");

  // formContainer가 존재하는지 확인
  if (formContainer) {
    const forms = {
      adminForm: `
                <div class="form-floating mb-3">
                    <input class="form-control" id="inputEmail" placeholder="아이디" />
                </div>
                <div class="form-floating mb-3">
                    <input class="form-control" id="inputPassword" type="password" placeholder="비밀번호" />
                </div>
                <div class="d-grid gap-2 mt-4">
                    <a class="btn btn-block btn-dark btn-lg font-weight-medium auth-form-btn txt-w" href="index.html" type="button">로그인</a>
                </div>
                <div class="d-flex align-items-center justify-content-between mt-4 mb-3">
                    <u><a class="small txt-e" href="password.html">비밀번호를 분실하셨나요?</a></u>
                </div>
            `,
      userForm: `
                <div class="form-floating mb-3">
                    <input class="form-control" id="userName" placeholder="아이디" />
                </div>
                <div class="form-floating mb-3">
                    <input class="form-control" id="userPassword" type="password" placeholder="비밀번호" />
                </div>
                <div class="d-grid gap-2 mb-3 mt-4">
                    <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="index.html" type="button">로그인</a>
                </div>
                <div class="d-flex align-items-center justify-content-between mt-4 mb-3">
                    <u><a class="small txt-e" href="password.html">비밀번호를 분실하셨나요?</a></u>
                </div>
            `,
      controlForm: `
                <div class="form-floating mb-3">
                    <input class="form-control" id="controlId" placeholder="아이디" />
                </div>
                <div class="form-floating mb-3">
                    <input class="form-control" id="controlPassword" type="password" placeholder="비밀번호" />
                </div>
                <div class="d-grid gap-2 mb-3 mt-4">
                    <a class="btn btn-block btn-info btn-lg font-weight-medium auth-form-btn" href="index.html" type="button">로그인</a>
                </div>
                <div class="d-flex align-items-center justify-content-between mt-4 mb-3">
                    <u><a class="small txt-e" href="password.html">비밀번호를 분실하셨나요?</a></u>
                </div>
            `,
    };

    navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        navLinks.forEach((link) => link.classList.remove("active"));
        this.classList.add("active");
        const selectedForm = this.getAttribute("data-form");
        formContainer.innerHTML = forms[selectedForm] || ""; // formContainer에 안전하게 값 설정
      });
    });
  } else {
    console.error("formContainer 요소를 찾을 수 없습니다.");
  }
});


// 탭 네비게이션
document.addEventListener("DOMContentLoaded", function () {
  const tabWrapper = document.querySelector(".nav-tabs-wrapper");
  const leftButton = document.querySelector(".nav-tabs-scroll.left");
  const rightButton = document.querySelector(".nav-tabs-scroll.right");

  if (tabWrapper) {
    tabWrapper.addEventListener("wheel", function (e) {
      if (e.deltaY > 0) {
        tabWrapper.scrollLeft += 300;
      } else {
        tabWrapper.scrollLeft -= 300;
      }
    });

    if (leftButton && rightButton) {
      leftButton.addEventListener("click", function () {
        tabWrapper.scrollLeft -= 300; // 원하는 만큼 이동
      });

      rightButton.addEventListener("click", function () {
        tabWrapper.scrollLeft += 300; // 원하는 만큼 이동
      });

      function updateButtonState() {
        leftButton.disabled = tabWrapper.scrollLeft <= 0;
        rightButton.disabled =
          tabWrapper.scrollLeft >=
          tabWrapper.scrollWidth - tabWrapper.clientWidth;
      }

      tabWrapper.addEventListener("scroll", updateButtonState);
      window.addEventListener("resize", updateButtonState);

      // 초기 버튼 상태 업데이트
      updateButtonState();
    }
  }
});

// 체크박스
document.addEventListener("DOMContentLoaded", function () {
  $(".checkbox-table").each(function () {
    const $table = $(this);

    $table.find(".chkAll").on("click", function () {
      const isChecked = $(this).is(":checked");
      $table.find("input[name=chk]").prop("checked", isChecked);

      if (isChecked) {
        $(this).removeClass("input-chk-all-relis");
      } else {
        $(this).removeClass("input-chk-all-relis");
      }
    });

    $table.find("input[name=chk]").on("click", function () {
      const total = $table.find("input[name=chk]").length;
      const chkChked = $table.find("input[name=chk]:checked").length;

      if (chkChked === 0) {
        $table.find(".chkAll").prop("checked", false);
        $table.find(".chkAll").removeClass("input-chk-all-relis");
      } else if (total != chkChked) {
        $table.find(".chkAll").prop("checked", false);
        $table.find(".chkAll").addClass("input-chk-all-relis");
      } else {
        $table.find(".chkAll").prop("checked", true);
        $table.find(".chkAll").removeClass("input-chk-all-relis");
      }
    });
  });

  // 오른쪽으로 이동
  $("#moveRight").on("click", function () {
    $("#leftTable tbody tr")
      .has("input[name=chk]:checked")
      .each(function () {
        $(this).find("input[name=chk]").prop("checked", false);
        $("#rightTable tbody").append($(this));
      });

    $("#leftTable").find(".chkAll").prop("checked", false);
  });

  // 왼쪽으로 이동
  $("#moveLeft").on("click", function () {
    $("#rightTable tbody tr")
      .has("input[name=chk]:checked")
      .each(function () {
        $(this).find("input[name=chk]").prop("checked", false);
        $("#leftTable tbody").append($(this));
      });

    $("#rightTable").find(".chkAll").prop("checked", false);
  });
});

// 툴팁
// Bootstrap 5용 초기화 코드
document.addEventListener("DOMContentLoaded", function () {
  // 툴팁 초기화
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // 팝오버 초기화
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
});

/*** * (krds-가 추가된 코드는 맥락적 도움말 코드)krds-tooltip * ***/
const krds_tooltip = (() => {
  let winSize = window.innerWidth <= 1024 ? "mob" : "pc"; // 화면 크기 설정

  const init = () => {
    tooltipEvent();
  };

  const tooltipEvent = () => {
    const toolBtns = document.querySelectorAll(".krds-tooltip-wrap .tool-btn");

    toolBtns.forEach((toolBtn) => {
      const span = document.createElement("span");
      span.classList.add("sr-only");
      span.textContent = "열기";
      toolBtn.innerHTML = ""; // 기존 내용 지우기
      toolBtn.appendChild(span);

      toolBtn.addEventListener("click", (event) => {
        const parent = toolBtn.closest(".krds-tooltip-wrap");
        const closeBtn = parent.querySelector(".tool-close");
        const cnt = parent.querySelector(".tool-in");
        const srTxt = event.target.querySelector(".sr-only");

        // 툴팁 열기
        if (cnt.style.display !== "block") {
          cnt.style.display = "block";
          cnt.setAttribute("tabindex", 0);
          srTxt.textContent = "닫기";
          tooltipResize(parent, cnt);
        }

        // 닫기 버튼 클릭 시
        closeBtn.onclick = () => {
          srTxt.textContent = "열기";
          cnt.style.display = "none";
          cnt.removeAttribute("tabindex");
          toolBtn.focus();
          tooltipResize(parent, cnt);
        };

        // 리사이즈 이벤트는 한 번만 추가
        window.addEventListener(
          "resize",
          () => {
            tooltipResize(parent, cnt);
          },
          {
            once: true,
          }
        );
      });
    });
  };

  const tooltipResize = (parent, cnt) => {
    if (winSize === "mob") {
      tooltipMob(parent, cnt);
    } else {
      tooltipPc(cnt);
    }
  };

  const tooltipMob = (parent, cnt) => {
    const offsetL = parent.offsetLeft - 16;
    const width = document.body.clientWidth;
    const offsetR = width - (parent.clientWidth + offsetL) - 32;

    if (cnt) {
      cnt.style.left = `-${offsetL}px`;
      cnt.style.right = `-${offsetR}px`;
    }
  };

  const tooltipPc = (cnt) => {
    cnt.style.left = "";
    cnt.style.right = "";
  };

  return {
    init,
  };
})();

// 도움말
const helperBox = (() => {
  const init = () => {
    const helperArea = document.querySelectorAll(".helper-area");
    if (helperArea.length > 0) {
      setTimeout(paddingSet, 50);
      setTimeout(heightSet, 100);
    }
  };

  const paddingSet = () => {
    const bnH = document.querySelector("#header-top").offsetHeight;
    const headerH = document.querySelector("#header").offsetHeight;
    const defaultPadding = bnH + headerH;
    const bnHiddgnPadding = headerH;

    const wrap = document.querySelector("#wrap");
    const expandBtn = document.querySelector(".btn-helper.expand");
    const expandBox = document.querySelector(".helper-wrap");
    const collapseBtn = document.querySelector(".btn-helper.fold");

    if (document.body.classList.contains("bn-hidden")) {
      if (wrap.classList.contains("scroll-down")) {
        expandBtn.style.marginTop = "0";
        if (winSize === "pc") {
          expandBox.style.paddingTop = "0";
          collapseBtn.style.marginTop = "0";
        } else {
          expandBox.removeAttribute("style");
          collapseBtn.removeAttribute("style");
        }
      } else {
        expandBtn.style.marginTop = `${bnHiddgnPadding}px`;
        if (winSize === "pc") {
          expandBox.style.paddingTop = `${bnHiddgnPadding}px`;
          collapseBtn.style.marginTop = `${bnHiddgnPadding}px`;
        } else {
          expandBox.style.paddingTop = "0";
          collapseBtn.removeAttribute("style");
        }
      }
    } else {
      expandBtn.style.marginTop = `${defaultPadding}px`;
      if (winSize === "pc") {
        expandBox.style.paddingTop = `${defaultPadding}px`;
        collapseBtn.style.marginTop = `${defaultPadding}px`;
      } else {
        expandBox.removeAttribute("style");
        collapseBtn.removeAttribute("style");
      }
    }
  };

  const trigger = () => {
    const btnExec = document.querySelectorAll(".btn-help-exec");
    if (helperArea.length > 0) {
      btnExec.forEach((e) => {
        e.classList.remove("btn-help-clicked");
      });
    }
  };

  const expand = () => {
    const btnExec = document.querySelectorAll(".btn-help-exec");
    const target = document.querySelector(".helper-wrap");
    if (helperArea.length > 0) {
      btnExec.forEach((e) => {
        e.addEventListener("click", () => {
          open();
          trigger();
          e.classList.add("btn-help-clicked");
          setTimeout(() => {
            target.focus();
          }, 50);
        });
      });
    }
  };

  const collapse = () => {
    const btn = document.querySelector(".btn-helper.fold");
    if (helperArea.length > 0) {
      btn.addEventListener("click", () => {
        if (winSize === "mob") {
          document.body.classList.remove("scroll-no");
        }
        close();
      });
    }
  };

  const open = () => {
    const helperArea = document.querySelectorAll(".helper-area");
    if (helperArea.length > 0) {
      const target = document.querySelector(".helper-wrap");
      const inner = document.querySelector("#container > .inner");
      const header = document.querySelector("#header .head-body > .inner");
      const container = document.querySelector("#container");
      const width = document.body.clientWidth;

      if (winSize === "mob") {
        document.body.classList.add("scroll-no");
      }

      target.setAttribute("aria-expanded", "true");
      target.setAttribute("tabindex", "0");
      document.querySelector(".helper-area").classList.add("expand");

      if (inner.classList.contains("flexible")) {
        inner.classList.remove("folded");
        container.classList.remove("help-close");
        container.classList.add("help-open");
        const headerL = header.offsetLeft;

        if (width > 1024 && width < 1900) {
          container.style.paddingRight = "";
          container.style.paddingLeft = `${headerL + 26}px`;
        }

        resize(header, container);
      }
    }
  };

  const close = () => {
    const header = document.querySelector("#header .head-body > .inner");
    const container = document.querySelector("#container");
    const target = document.querySelector(".helper-wrap");
    const inner = document.querySelector("#container > .inner");
    const trigger = document.querySelectorAll(".btn-help-clicked");
    const width = document.body.clientWidth;

    target.setAttribute("aria-expanded", "false");
    target.removeAttribute("tabindex");
    document.querySelector(".helper-area").classList.remove("expand");

    if (trigger.length > 0) {
      trigger[0].focus();
    }

    if (inner.classList.contains("flexible")) {
      inner.classList.add("folded");
      container.classList.add("help-close");
      container.classList.remove("help-open");
      container.style.paddingLeft = "";

      if (container.classList.contains("help-close")) {
        container.style.paddingLight = "";
        container.style.paddingRight = "";
      } else if (width > 1900 || width <= 1024) {
        container.classList.remove("help-open");
        container.classList.remove("help-close");
      }

      resize(header, container);
    }
  };

  const resize = (header, container) => {
    window.addEventListener("resize", () => {
      const headerL = header.offsetLeft;
      const width = document.body.clientWidth;

      if (width > 1024 && width < 1900) {
        container.style.paddingRight = "";
        if (container.classList.contains("help-open")) {
          container.style.paddingLeft = `${headerL + 26}px`;
        } else {
          container.style.paddingLeft = "";
        }
      } else if (width <= 1024) {
        container.style.paddingLeft = "";
        container.style.paddingRight = "";
      } else {
        container.style.paddingLeft = "";
      }
    });
  };

  const heightSet = () => {
    const helperArea = document.querySelector(".helper-area");
    const expandBox = document.querySelector(".helper-wrap");
    const contsArea = document.querySelector(".helper-conts-area");
    const helperTitH = document.querySelector(".helper-tit").offsetHeight;

    const contsPt = parseInt(getComputedStyle(expandBox).paddingTop);
    const contsAreaH = window.innerHeight - helperTitH - contsPt;

    contsArea.style.height = `${contsAreaH}px`;

    if (winSize === "mob") {
      if (helperArea.classList.contains("expand")) {
        document.body.classList.add("scroll-no");
      }
    } else {
      document.body.classList.remove("scroll-no"); // 추가: 모바일에서의 스크롤 복원
    }
  };

  return {
    init,
    expand,
    collapse,
  };
})();

// 초기화 호출
krds_tooltip.init();
helperBox.init();

// 인풋 유효성 검사
(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
