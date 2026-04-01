import './App.css';

function App() {
  const handleRequestClick = () => {
    // 여기에 구글 폼 링크를 붙여넣으세요
    window.open('https://forms.gle/NYmKJruyNMAXJxET7', '_blank');
  };

  return (
    <div className="App">
      {/* 섹션 1: 히어로 */}
      <section className="hero">
        <h1>원안소 元案所</h1>
        <h2>로그라인을 주십시오.</h2>
        <p>논쟁 가능한 시나리오로 제련합니다.</p>
        <p className="sub-copy">
          즉시 프리프로덕션 안건 논의가 가능한 수준의<br />
          시나리오 초안 패키지를 출력합니다.
        </p>
      </section>

      {/* 섹션 2: 4대 불가 원칙 */}
      <section className="cannot-do">
        <h2>이 기술이 하지 않는 것</h2>
        <h3>원안소의 4대 불가 원칙</h3>
        <div className="principles">
          <div className="principle">
            <h4>첨삭 불가</h4>
            <p>기존 시나리오를 고쳐주지 않습니다.</p>
          </div>
          <div className="principle">
            <h4>결정 대행 불가</h4>
            <p>대신 방향을 정해주지 않습니다.</p>
          </div>
          <div className="principle">
            <h4>성공 보장 불가</h4>
            <p>흥행이 아닌, 구조적 완결성만 책임집니다.</p>
          </div>
          <div className="principle">
            <h4>취향 맞춤 불가</h4>
            <p>개인적 기호보다 논리적 필연성을 우선합니다.</p>
          </div>
        </div>
        <p className="promise">그 대신, 우리는 다음을 약속합니다.</p>
      </section>

      {/* 섹션 3: 확실히 해주는 것 */}
      <section className="can-do">
        <h2>이 기술이 확실히 해주는 것</h2>
        <p className="subtitle">프리프로덕션 회의 테이블에 올려드립니다</p>
        
        <div className="features">
          <div className="feature">
            <h4>설명 가능한 결과물</h4>
            <p>"이 장면이 왜 필요한가?"라는 질문에 논리로 답할 수 있는 결과물을 제공합니다. 모든 씬은 우연이 아닌 필연으로 배치됩니다.</p>
          </div>
          <div className="feature">
            <h4>논리적 필연성</h4>
            <p>로그라인의 목표가 반드시 성립하는 논리적 구조를 설계합니다. 고객이 입력한 의뢰서의 모든 조건은 결과물에 반드시 반영됩니다. 금지 요소, 엔딩 요건, 장르 조건 등 단 하나의 항목도 임의로 변경되지 않습니다.</p>
          </div>
          <div className="feature">
            <h4>개발지옥 탈출</h4>
            <p>수개월, 수년간 반복되던 개발지옥을 건너뜁니다. 논의 가능한 시나리오가 즉시 테이블 위에 놓입니다.</p>
          </div>
          <div className="feature">
            <h4>제작 리스크 제거</h4>
            <p>촬영에 들어갔다가 엎어질 수밖에 없는 구조적 결함을 시나리오 단계에서 미리 파괴합니다.</p>
          </div>
        </div>
      </section>

      {/* 섹션 4: 출력물 명세서 */}
      <section className="output-spec">
        <h2>출력물 명세서</h2>
        <div className="spec-warning">
          <h4>반드시 알아야 할 점</h4>
          <p>제공되는 것은 최종 결과물입니다. 사고 과정, 내부 추론, 중간 전개도는 일절 공개되지 않습니다. 필연성은 설명서가 아닌, 결과물의 구조 자체에 내재되어 있습니다. 이 원안을 사용할지의 여부는 전적으로 고객 본인의 판단입니다.</p>
        </div>

        <div className="spec-items">
          <div className="spec-item">
            <h4>1단계 — 기획안</h4>
            <ul>
              <li>제목</li>
              <li>로그라인</li>
              <li>주제의식</li>
              <li>주요 등장인물</li>
              <li>전체 줄거리 (막 구조)</li>
              <li>저작권 양도</li>
            </ul>
          </div>
          <div className="spec-item">
            <h4>2단계 — 시나리오 초안</h4>
            <ul>
              <li>1단계 기획안 전체</li>
              <li>시퀀스 구성안</li>
              <li>시나리오 초안 (100씬 전후)</li>
              <li>저작권 양도</li>
            </ul>
            <p className="spec-note">2단계는 반드시 1단계 기획안 보유자에게만 제공됩니다. 1단계 결과물과의 연속성이 보장됩니다. 원안소 결과물 자체의 재판매는 불가합니다.</p>
          </div>
        </div>
      </section>

      {/* 섹션 5: 개발 리스크 감리 공정 */}
      <section className="risk-audit">
        <h2>개발 리스크 감리 공정</h2>
        <p className="risk-subtitle">증발하는 개발비를 아끼십시오.</p>
        
        <div className="risk-content">
          <p>혹시 잘못된 결정 때문에 막대한 비용과, <br />돈으로도 살 수 없는 '시간'을 태운 적은 없습니까?</p>
          
          <div className="risk-box">
            <p><strong>[원안소]는 작가를 대체하는 것이 아닙니다.</strong></p>
            <p>'제작되지 않을 작품'에 낭비되는 비용을 사전에 제거하는 감리 공정입니다.</p>
          </div>

          <p>예측 불가능한 폐기율을 줄이고, <br />통제 가능한 고정 비용으로 전환하십시오.</p>
        </div>
      </section>

      {/* 섹션 6: 이런 경우엔 필요 없습니다 */}
      <section className="not-needed">
        <h2>이런 경우엔 필요 없습니다</h2>
        <p className="section-subtitle">아래에 해당한다면 원안소와는 맞지 않습니다.</p>
        
        <div className="checklist">
          <div className="check-item">
            <p>아직 로그라인이 확정되지 않은 단계</p>
          </div>
          <div className="check-item">
            <p>여러 아이디어를 가볍게 비교하고 싶은 경우</p>
          </div>
          <div className="check-item">
            <p>감각적 실험이나 스타일 탐색이 목적일 때</p>
          </div>
          <div className="check-item">
            <p>빠르게 여러 버전을 반복 생성하고 싶은 경우</p>
          </div>
        </div>
      </section>

      {/* 섹션 7: 이런 상황에서는 필요해집니다 */}
      <section className="is-needed">
        <h2>이런 상황에서는 필요해집니다</h2>
        <p className="section-subtitle">그럼에도 불구하고</p>
        
        <div className="checklist positive">
          <div className="check-item">
            <p>프리프로덕션 심의 테이블에 올릴 수 있는 수준의 초안이 필요한 순간.</p>
          </div>
          <div className="check-item">
            <p>내부 회의에서 이야기의 필연성을 증명해야 할 때.</p>
          </div>
          <div className="check-item">
            <p>로그라인은 정해졌는데, 구조적 허점 때문에 회의가 계속 공전할 때.</p>
          </div>
          <div className="check-item">
            <p>막힌 구간을 뚫고, 완결된 구조의 지도를 얻고 싶을 때.</p>
          </div>
        </div>
      </section>

      {/* 섹션 8: 가격 정책 */}
      <section className="pricing">
        <h2>가격 정책</h2>
        
        <div className="pricing-item">
          <h3>1단계 — 기획안</h3>
          <p className="pricing-desc">영업일 기준 2일 이내 납품</p>
          <p className="price">500만원</p>
        </div>

        <div className="pricing-item">
          <h3>2단계 — 시나리오 초안</h3>
          <p className="pricing-desc">1단계 기획안 보유자 전용 (3개월 이내) | 영업일 기준 2일 이내 납품</p>
          <div className="pricing-table">
            <div className="table-row header">
              <div className="table-cell">순제작비 예산 규모</div>
              <div className="table-cell">가격</div>
            </div>
            <div className="table-row">
              <div className="table-cell">50억 미만</div>
              <div className="table-cell">2,000만원</div>
            </div>
            <div className="table-row">
              <div className="table-cell">50억 ~ 200억</div>
              <div className="table-cell">3,500만원</div>
            </div>
            <div className="table-row">
              <div className="table-cell">200억 이상</div>
              <div className="table-cell">5,000만원</div>
            </div>
          </div>
        </div>

        <div className="pricing-item">
          <h3>풀 패키지 발주</h3>
          <p className="pricing-desc">1단계 없이 바로 전체 패키지를 의뢰하는 옵션입니다. 영업일 기준 3일 이내 납품</p>
          <div className="pricing-table">
            <div className="table-row header">
              <div className="table-cell">순제작비 예산 규모</div>
              <div className="table-cell">가격</div>
            </div>
            <div className="table-row">
              <div className="table-cell">50억 미만</div>
              <div className="table-cell">2,200만원</div>
            </div>
            <div className="table-row">
              <div className="table-cell">50억 ~ 200억</div>
              <div className="table-cell">3,700만원</div>
            </div>
            <div className="table-row">
              <div className="table-cell">200억 이상</div>
              <div className="table-cell">5,200만원</div>
            </div>
          </div>
        </div>

        <div className="pricing-item">
          <h3>긴급 발주</h3>
          <p className="pricing-desc">풀 패키지 전용 | 영업일 무관 | 입금 확인 시점부터 48시간 이내 납품</p>
          <div className="pricing-table">
            <div className="table-row header">
              <div className="table-cell">예산 규모</div>
              <div className="table-cell">가격</div>
            </div>
            <div className="table-row">
              <div className="table-cell">50억 미만</div>
              <div className="table-cell">3,000만원</div>
            </div>
            <div className="table-row">
              <div className="table-cell">50억 ~ 200억</div>
              <div className="table-cell">5,250만원</div>
            </div>
            <div className="table-row">
              <div className="table-cell">200억 이상</div>
              <div className="table-cell">7,500만원</div>
            </div>
          </div>
        </div>

        <div className="pricing-item">
          <h3>연간 라이선스</h3>
          <p className="pricing-desc">대형 OTT / 스튜디오 전용 | 별도 미팅을 통해 계약이 진행됩니다.</p>
          <div className="pricing-table">
            <div className="table-row header">
              <div className="table-cell">플랜</div>
              <div className="table-cell">연간 요금</div>
              <div className="table-cell">월 제공량</div>
            </div>
            <div className="table-row">
              <div className="table-cell">기본</div>
              <div className="table-cell">12억원</div>
              <div className="table-cell">월 5건</div>
            </div>
          </div>
          <p className="pricing-note">초과 사용 시 예산 연동 정상가 적용. 전담 대응 및 비밀유지계약 포함</p>
        </div>

        <p className="pricing-footer">* 모든 금액은 VAT 별도입니다.<br />* 사전 양식 검토 후 진행됩니다.</p>
      </section>

      {/* 섹션 9: 발주 프로세스 */}
      <section className="process">
        <h2>발주 프로세스</h2>
        
        <div className="process-steps">
          <div className="step">
            <div className="step-number">01</div>
            <p>홈페이지 의뢰서 폼 작성 및 제출</p>
          </div>
          <div className="step">
            <div className="step-number">02</div>
            <p>운영자 양식 검토 및 승인 (보완 요청이 있을 수 있습니다)</p>
          </div>
          <div className="step">
            <div className="step-number">03</div>
            <p>승인 후 견적서 발송</p>
          </div>
          <div className="step">
            <div className="step-number">04</div>
            <p>선불 입금</p>
          </div>
          <div className="step">
            <div className="step-number">05</div>
            <p>입금 확인 시점부터 납품 기한 카운트 시작</p>
          </div>
          <div className="step">
            <div className="step-number">06</div>
            <p>결과물 암호화 이메일 전송</p>
          </div>
        </div>

        <div className="process-info">
          <h4>입금 확인 시간</h4>
          <p>영업일 오전 10시 ~ 오후 5시</p>
          <p>영업일 외 입금은 다음 영업일 오전 10시부터 카운트 시작</p>
        </div>

        <div className="process-caution">
          <h4>유의사항</h4>
          <ul>
            <li>모든 결제는 선불 완납 후 작업이 진행됩니다.</li>
            <li>결과물 납품 후 수정은 제공되지 않습니다. 단건 생성이 기준입니다.</li>
            <li>2단계 패키지는 반드시 1단계 기획안 보유자에게만 제공됩니다.</li>
            <li>외부에서 작성된 기획안으로 2단계 직접 발주는 불가합니다.</li>
            <li>예산 규모는 의뢰서 입력 기준이며, 예산에 맞는 결과물이 생성됩니다.</li>
            <li>연간 라이선스 문의는 별도 미팅으로 진행됩니다.</li>
          </ul>
        </div>
      </section>

      {/* 섹션 10: 최종 행동 유도 */}
      <section className="cta">
        <h2>준비된 로그라인이 있다면,<br />문을 여십시오.</h2>
        <button onClick={handleRequestClick} className="cta-button">
          의뢰서 작성
        </button>
      </section>

      {/* 섹션 11: 포트폴리오 */}
      <section className="portfolio">
        <h2>포트폴리오</h2>
        <p className="portfolio-placeholder">(추후 추가)</p>
      </section>

      {/* 푸터 */}
      <footer className="footer">
        <p>&copy; 2024 원안소. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
