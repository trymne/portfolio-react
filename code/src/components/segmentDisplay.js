// Define the custom web component
class SgmntDisplay extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.updateClock = this.updateClock.bind(this);
    this.background = "black";
    this.sgmntColor = "#00e906";
    this.sgmntSize = 20;
    this.sgmtSmall = false;
    this.dayPref = "long";
  }

  makeChar(char, segments) {
    const segmentClasses = segments.split(" ");
    const cssRules = segmentClasses
      .map(
        (segment) => ` #ltr-${char} .${segment} 
            {color: var(--sgmnt-bgcolor,${this.background});}`
      )
      .join("\n");
    return cssRules;
  }

  define() {
    //defining characters
    this.chA = "s8 s9 s10 s12 s13";
    this.chB = "s5 s9 s12";
    this.chC = "s3 s5 s7 s9 s10 s11 s12 s13";
    this.chD = "s4 s9 s10 s11 s12 s13";
    this.chE = "s3 s5 s7 s9 s10 s12 s13";
    this.chF = "s3 s5 s7 s8 s9 s10 s12 s13";
    this.chG = "s5 s7 s9 s10 s11 s12";
    this.chH = "s1 s8 s9 s10 s12 s13";
    this.chI = "s1 s2 s4 s6 s8 s9 s10 s11 s12 s13";
    this.chJ = "s1 s4 s6 s9 s10 s11 s12 s13";
    this.chK = "s1 s9 s5 s8 s12";
    this.chL = "s1 s3 s5 s7 s9 s10 s11 s12 s13";
    this.chM = "s1 s8 s12 s13";
    this.chN = "s1 s8 s10 s12";
    this.chO = "s9 s10 s11 s12 s13";
    this.chP = "s3 s5 s8 s12 s13";
    this.chQ = "s9 s10 s11 s12";
    this.chR = "s9 s5 s8 s12";
    this.chS = "s4 s5 s10 s12";
    this.chT = "s1 s3 s5 s7 s10 s12 s13";
    this.chU = "s1 s9 s10 s11 s12 s13";
    this.chV = "s1 s3 s5 s8 s9 s13";
    this.chW = "s1 s8 s9 s10";
    this.chX = "s1 s5 s4 s8";
    this.chY = "s1 s3 s5 s4 s8 s13";
    this.chZ = "s4 s3 s5 s6";
    this.nm1 = "s1 s2 s4 s6 s8 s9 s11 s12 s13";
    this.nm2 = "s4 s3 s5 s6 s9 s13";
    this.nm3 = "s2 s4 s6 s5 s9 s12";
    this.nm4 = "s1 s2 s4 s8 s12 s13";
    this.nm5 = "s2 s4 s5 s7 s10 s12";
    this.nm6 = "s1 s4 s6 s5 s9";
    this.nm7 = "s4 s6 s5 s3 s8 s9 s13";
    this.nm8 = "s4 s5";
    this.nm9 = "s4 s5 s3 s8 s13";
    this.nm0 = "s9 s13";
    this.blank = "s1 s2 s3 s4 s5 s6 s7 s8 s9 s10 s11 s12 s13";

    //the beginning used for the svg(segments) in a regular size
    this.svgStartReg = `<svg
              class="sgmnt-display"`;

    //the beginning used for the svg(segments) in a regular size
    this.svgStartSm = `<svg
              class="sgmnt-display sgmnt-small"`;

    //the rest of the svg, continuation of "svgStartSm/svgStartReg"
    this.sgmnt = `
        
        viewBox="0 0 200 359"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          clip-path="url(#clip0_1_32)">
          <rect class="sgmnt-bg" width="200" height="358.51" fill="currentColor" />
          <path
            class="sgmnt s7"
            d="M142.118 69.9627V171.812L200 89.381V57.4346C200 39.5077 191.782 23.4899 178.896 12.9604L141.655 65.9954C141.954 67.278 142.118 68.5905 142.118 69.9627Z"
            fill="currentColor"
          />
          <path
            class="sgmnt s1"
            d="M75.4511 52.4087H124.549C131.066 52.4087 136.749 55.9733 139.776 61.2529L175.481 10.3952C166.16 3.84783 154.81 0 142.55 0H57.4347C45.0857 0 33.6614 3.90763 24.2953 10.5445L60.0745 61.4914C63.0723 56.0775 68.8292 52.4087 75.4511 52.4087Z"
            fill="currentColor"
          />
          <path
            class="sgmnt s5"
            d="M199.985 260.776V96.7935L142.416 178.777L199.985 260.776Z"
            fill="currentColor"
          />
          <path
            class="sgmnt s3"
            d="M142.118 185.742V289.694C142.118 290.201 142.088 290.708 142.043 291.216L179.702 344.847C192.11 334.318 200 318.613 200 301.059V267.159L199.523 267.502L142.118 185.757V185.742Z"
            fill="currentColor"
          />
          <path
            class="sgmnt s9"
            d="M62.1327 71.842V171.827L97.2408 121.835L62.1327 71.842Z"
            fill="currentColor"
          />
          <path
            class="sgmnt s12"
            d="M62.1327 184.832V285.712L97.554 235.272L62.1327 184.832Z"
            fill="currentColor"
          />
          <path
            class="sgmnt s11"
            d="M100.149 231.574L137.226 178.777L99.8359 125.548L62.774 178.33L100.149 231.574Z"
            fill="currentColor"
          />
          <path
            class="sgmnt s13"
            d="M137.852 285.265V185.28L102.759 235.272L137.852 285.265Z"
            fill="currentColor"
          />
          <path
            class="sgmnt s10"
            d="M137.852 172.289V71.3945L102.431 121.835L137.852 172.289Z"
            fill="currentColor"
          />
          <path
            class="sgmnt s4"
            d="M0 96.3459V260.313L57.569 178.33L0 96.3459Z"
            fill="currentColor"
          />
          <path
            class="sgmnt s2"
            d="M57.8822 289.694V185.295L0 267.726V301.059C0 318.702 7.96419 334.482 20.4922 345.026L57.9866 291.618C57.912 290.992 57.8822 290.351 57.8822 289.694Z"
            fill="currentColor"
          />
          <path
            class="sgmnt s8"
            d="M124.549 307.263H75.4511C68.337 307.263 62.2222 303.028 59.4631 296.943L23.8628 347.651C33.3035 354.467 44.9067 358.509 57.4496 358.509H142.565C155.198 358.509 166.876 354.422 176.361 347.502L140.671 296.674C137.972 302.908 131.767 307.263 124.549 307.263Z"
            fill="currentColor"
          />
          <path
            class="sgmnt s6"
            d="M57.8822 69.9627C57.8822 68.7099 58.0163 67.5018 58.2699 66.3235L20.9097 13.1096C8.14311 23.6391 0.0148315 39.5823 0.0148315 57.4198V88.9187L57.897 171.35V69.9627H57.8822Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_32">
            <rect width="200" height="358.51" fill="white" />
          </clipPath>
        </defs>
      </svg>
      `;
    //SVG of the dot
    this.chDot = ` viewBox="0 0 200 359" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect class="sgmnt-bg" width="200" height="358.51" fill="currentColor"/>
        <circle class="sgmnt" cx="100" cy="327" r="20" fill="currentColor"/>
        </svg>
        `;
    //SVG of the colon
    this.colon = `<svg class="sgmnt-display" width="200" height="359" viewBox="0 0 200 359" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect class="sgmnt-bg" width="200" height="358.51" fill="currentColor"/>
        <circle class="sgmnt" cx="100" cy="125" r="20" fill="currentColor"/>
        <circle class="sgmnt" cx="100" cy="227" r="20" fill="currentColor"/>
        </svg>
        `;

    this.styles = " ";

    //container of the web component
    this.container = document.createElement("div");
    this.container.classList.add("sgmnt-container");

    this.uptTimeStyle;
    this.styleElement = document.createElement("style");

    //declaring the basic styles of the component
    this.basicStyle = `

        .sgmnt-container {
            display: flex;
            flex-wrap: wrap;
            background-color: var(--sgmnt-bgcolor,${this.background});
            width: fit-content;
            
        }
        .sgmnt-bg {
            color: var(--sgmnt-bgcolor,${this.background});
        }
        .sgmnt  {
            color: var(--sgmnt-color, ${this.sgmntColor});
        }
        .sgmnt-display {
            --size: var(--sgmnt-size,${this.sgmntSize}px);
            height: calc(2 * (var(--size)));
            width: width(3.59 * (var(--size)));
            padding: 0.2em;
            background-color: var(--sgmnt-bgcolor,${this.background});
        }
        .sgmnt-small {
            --size: var(--sgmnt-size,${this.sgmntSize}px);
            height: calc(1 * (var(--size)));
            width: width(1.795 * (var(--size)));
            padding: 0.1em;
        }

        .ltr {
            height:fit-content;
        }

        .sgmnt-dayCnt, .sgmnt-dateCnt {
            width:fit-content;
            height:fit-content;
            display:flex;
        }
        `;
  }

  //checks which character to make
  getChar(i, ch) {
    let style;
    switch (ch) {
      case "A":
        style = this.makeChar(i, this.chA);
        break;
      case "B":
        style = this.makeChar(i, this.chB);
        break;
      case "C":
        style = this.makeChar(i, this.chC);
        break;
      case "D":
        style = this.makeChar(i, this.chD);
        break;
      case "E":
        style = this.makeChar(i, this.chE);
        break;
      case "F":
        style = this.makeChar(i, this.chF);
        break;
      case "G":
        style = this.makeChar(i, this.chG);
        break;
      case "H":
        style = this.makeChar(i, this.chH);
        break;
      case "I":
        style = this.makeChar(i, this.chI);
        break;
      case "J":
        style = this.makeChar(i, this.chJ);
        break;
      case "K":
        style = this.makeChar(i, this.chK);
        break;
      case "L":
        style = this.makeChar(i, this.chL);
        break;
      case "M":
        style = this.makeChar(i, this.chM);
        break;
      case "N":
        style = this.makeChar(i, this.chN);
        break;
      case "O":
        style = this.makeChar(i, this.chO);
        break;
      case "P":
        style = this.makeChar(i, this.chP);
        break;
      case "Q":
        style = this.makeChar(i, this.chQ);
        break;
      case "R":
        style = this.makeChar(i, this.chR);
        break;
      case "S":
        style = this.makeChar(i, this.chS);
        break;
      case "T":
        style = this.makeChar(i, this.chT);
        break;
      case "O":
        style = this.makeChar(i, this.chO);
        break;
      case "P":
        style = this.makeChar(i, this.chP);
        break;
      case "Q":
        style = this.makeChar(i, this.chQ);
        break;
      case "R":
        style = this.makeChar(i, this.chR);
        break;
      case "S":
        style = this.makeChar(i, this.chS);
        break;
      case "T":
        style = this.makeChar(i, this.chT);
        break;
      case "U":
        style = this.makeChar(i, this.chU);
        break;
      case "V":
        style = this.makeChar(i, this.chV);
        break;
      case "W":
        style = this.makeChar(i, this.chW);
        break;
      case "X":
        style = this.makeChar(i, this.chX);
        break;
      case "Y":
        style = this.makeChar(i, this.chY);
        break;
      case "Z":
        style = this.makeChar(i, this.chZ);
        break;
      case "1":
        style = this.makeChar(i, this.nm1);
        break;
      case "2":
        style = this.makeChar(i, this.nm2);
        break;
      case "3":
        style = this.makeChar(i, this.nm3);
        break;
      case "4":
        style = this.makeChar(i, this.nm4);
        break;
      case "5":
        style = this.makeChar(i, this.nm5);
        break;
      case "6":
        style = this.makeChar(i, this.nm6);
        break;
      case "7":
        style = this.makeChar(i, this.nm7);
        break;
      case "8":
        style = this.makeChar(i, this.nm8);
        break;
      case "9":
        style = this.makeChar(i, this.nm9);
        break;
      case "0":
        style = this.makeChar(i, this.nm0);
        break;
      case " ":
        style = this.makeChar(i, this.blank);
        break;
      default:
        break;
    }

    return style;
  }

  createDisplay(text) {
    for (let i = 0; i < text.length; i++) {
      const ltr = document.createElement("div");
      ltr.classList.add("ltr");
      ltr.id = `ltr-${i}`;

      let html;
      if (text[i] !== ":") {
        if (!this.sgmtSmall) {
          html = this.svgStartReg + this.sgmnt;
        } else {
          html = this.svgStartSm + this.sgmnt;
        }
        this.styles += this.getChar(i, text[i]);
      } else {
        html = this.colon;
      }

      this.styles += this.getChar(i, text[i]);
      ltr.innerHTML = html;

      this.container.appendChild(ltr);
    }
  }

  displayClock() {
    setInterval(this.updateClock, 1000);
  }

  updateClock() {
    const now = new Date();
    let day = "";
    let minutes = "";
    let seconds = "";
    let fullDate = "";
    if (this.text[5] == "D") {
      let date = String(now.getDate()).padStart(2, "0");
      let month = String(now.getMonth() + 1).padStart(2, "0");
      let year = String(now.getFullYear()).slice(2);
      fullDate = ` ${date}.${month}.${year}`;
    }

    if (this.text[4] == "d")
      day =
        "  " +
        now.toLocaleString("en-US", { weekday: this.dayPref }).toUpperCase();
    if (this.text[2] == "m")
      minutes = ":" + String(now.getMinutes()).padStart(2, "0");
    if (this.text[3] == "s" && this.text[2] == "m")
      seconds = ":" + String(now.getSeconds()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");

    let text = `${hours}${minutes}${seconds}${day}${fullDate}`;
    //console.log(text)

    if (!this.timeStarted) {
      let dayContainer;
      let dateContainer;
      let allDatesContainer;

      if (day) {
        dayContainer = document.createElement("div");
        dayContainer.classList.add("sgmnt-dayCnt");
        dateContainer = document.createElement("div");
        dateContainer.classList.add("sgmnt-dateCnt");
        allDatesContainer = document.createElement("div");
        allDatesContainer.classList.add("sgmnt-allDateCnt");
      }
      for (let i = 0; i < text.length; i++) {
        if (text[i] == " " && this.sgmtSmall == false && day && fullDate) {
          this.sgmtSmall = true;
          continue;
        }
        const ltr = document.createElement("div");
        ltr.classList.add("ltr");
        ltr.id = `ltr-${i}`;

        let html;
        if (text[i] !== ":") {
          if (!this.sgmtSmall) {
            html = this.svgStartReg + this.sgmnt;
          } else {
            html = this.svgStartSm + this.sgmnt;
          }

          this.uptTimeStyle += this.getChar(i, text[i]);
        } else {
          html = this.colon;
        }

        this.uptTimeStyle += this.getChar(i, text[i]);
        ltr.innerHTML = html;

        if (
          (isNaN(text[i]) && text[i] !== ":" && text[i] !== ".") ||
          (text[i] === " " && !isNaN(text[i - 1]))
        ) {
          dayContainer.appendChild(ltr);
          if (text[i] === " ") {
            allDatesContainer.appendChild(dayContainer);
          }
          if ((day || fullDate) && this.sgmtSmall) continue;
        }

        if (this.sgmtSmall && (!isNaN(text[i]) || text[i] === ".")) {
          if (text[i] === ".") {
            let svg = this.svgStartSm + this.chDot;
            ltr.innerHTML = svg;
            dateContainer.appendChild(ltr);
          } else {
            dateContainer.appendChild(ltr);
          }

          if (i === text.length - 1) {
            allDatesContainer.appendChild(dayContainer);
            allDatesContainer.appendChild(dateContainer);
            this.container.appendChild(allDatesContainer);
            continue;
          }
          continue;
        }

        this.container.appendChild(ltr);
      }
    } else {
      this.uptTimeStyle = "";

      for (let i = 0; i < text.length; i++) {
        if (text[i] !== ":" && text[i] !== ".") {
          this.uptTimeStyle += this.getChar(i, text[i]);
        } else continue;
      }
    }

    let styles = this.basicStyle + this.uptTimeStyle;
    this.styleElement.textContent = styles;
    this.timeStarted = true;
  }

  connectedCallback() {
    this.text = this.getAttribute("text");
    this.sgmntColor = this.getAttribute("sgClr") || this.sgmntColor;
    this.background = this.getAttribute("bgClr") || this.background;
    this.sgmntSize = this.getAttribute("size") || this.sgmntSize;
    this.dayPref = this.getAttribute("dayVersion") || this.dayPref;

    this.define();

    if (this.text[0] == "!") {
      if (this.text[1] == "#") {
        this.displayClock();
      }
    } else {
      this.createDisplay(this.text);
    }

    let styles = this.basicStyle;
    styles += this.styles;
    this.styleElement.textContent = styles;

    this.shadowRoot.appendChild(this.styleElement);

    this.shadowRoot.appendChild(this.container);
  }
}

// Register the custom web component
customElements.define("sgmnt-display", SgmntDisplay);
