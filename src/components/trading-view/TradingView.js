import React, { useEffect } from "react";

const symbols = {
  symbols: [
    {
      proName: "FOREXCOM:SPXUSD",
      title: "S&P 500",
    },
    {
      proName: "FOREXCOM:NSXUSD",
      title: "US 100",
    },
    {
      proName: "FX_IDC:EURUSD",
      title: "EUR/USD",
    },
    {
      proName: "BITSTAMP:BTCUSD",
      title: "Bitcoin",
    },
    {
      proName: "BITSTAMP:ETHUSD",
      title: "Ethereum",
    },
  ],
  showSymbolLogo: true,
  colorTheme: "light",
  isTransparent: false,
  displayMode: "adaptive",
  locale: "en",
};

function TradingView() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify(symbols);
    const container = document.getElementsByClassName(
      "tradingview-widget-container__widget"
    )[0];
    if (container.childNodes.length === 0) {
      container.appendChild(script);
    }
    // eslint-disable-next-line
  }, [symbols]);

  return (
    <div className="trading-view-body container mt-5">
      <div className="tradingview-widget-container">
        <div
          className="tradingview-widget-container__widget"
          style={{ width: "100%", height: "100%" }}
        ></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow noreferrer"
            target="_blank"
          >
            <span
              className="visit-text"
              style={{ fontSize: "0.8rem", color: "#21C87A" }}
            >
              Track all markets on TradingView
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TradingView;
