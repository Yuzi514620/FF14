import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './App.css';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';


const images = import.meta.glob('./assets/*.png', { eager: true })
const getImage = (name) => images[`./assets/${name}`]?.default
// 假資料：角色商品卡
const products = [
  {
    id: 1,
    //雪燦
    name: '貓魅族',
    desc: `「妳知道妳跟星星有什麼差別嗎？星星在天上，妳在我心上。」\n
          — 惡魔貓男．雪燦，參戰！`,
    img: getImage('1.png'),
  },
  {
    id: 2,
    //弱氣
    name: '敖龍族',
    desc: `比起白天的咖啡，我更懂夜晚的酒精。
          一開始嚐起來無害，但很容易讓人不小心微醺。

          今晚的酒很烈，
          不知道有沒有榮幸，
          做你今晚專屬的解酒藥。`,
    img: getImage('2.png'),
  },
  {
    id: 3,
    //普琳希絲
    name: '維艾拉族',
    desc: `「妳是我所嚮往的光。」\n
          叱吒風雲的嗜血狂徒，
          戰場上拿下無數戰績；
          在妳面前，卻是會撒嬌的委屈小狗，
          在妳需要的時候，也能讓妳好好依靠。\n
          哪一個，才是真正的他？`,
    img: getImage('3.png'),
  },
  {
    id: 4,
    //鄰居
    name: '維艾拉族',
    desc: `早上七點，也許遇見你，在樓下買早點；
          凌晨一點，也許遇見我，在巷口買宵夜。
          側著臉，不經意，站左邊。\n
           — 明天見。`,
    img: getImage('4.png'),
  },
  {
    id: 5,
    //菲勒斯K
    name: '敖龍族',
    desc: `「除了喜歡熱血沸騰的戰鬥以外，也喜歡到處旅遊看風景拍照。」\n
            如果是妳，也會這樣到處旅遊走走嗎？`,
    img: getImage('5.png'),
  },
  {
    id: 6,
    //厄耳特洛斯
    name: '敖龍族',
    desc: `「如果可以，我會把他殺了，然後再把他的嘴封起來。
            可惜——不行。」

            荒原在呼吸，血的回聲滲入風裡。
            祈禱無用，早被殘肢與沙吞盡。

            我從不追逐，只等待腐敗自行靠近。
            暴力在我掌心開花，撕裂化作殘息的悲鳴。

            我愛這樣的聲音——
            一種能掐死喧囂的爪牙。

            我以靜為牙，我以影為形。
            凡動者，皆獵；凡近者，皆亡。

            我不屬於群，也不侍奉神明。
            始於泥沼之卑微，終於墓壙之腐敗。
            血為路，骨為門。
            踏入者，無歸。

            聽我之息，
            即是墜入。`,
    img: getImage('6.png'),
  },
  {
    id: 7,
    //刻耳柏洛斯
    name: '敖龍族',
    desc: `在腐爛的荒原之下，
          一對行於滅與生之間的兄弟，自暗夜的臍血中誕生。

          瘋狗以狂為牙，咬碎慾望與光，將血沫噴成星；
          默犬以靜為刃，切開聲與神，讓屍骸化為碎骨。

          一者仰天狂吠，聲腥如潮；
          一者俯地低吟，眼冷如墓。

          當瘋與靜相遇，
          他們以撕咬書寫律法——
          以痛為墨，以死為印。

          於是，荒原開始滲血；
          永夜張開，審判開始。`,
    img: getImage('12.png'),
  },
  {
    id: 8,
    //蓋倫特
    name: '維艾拉族',
    desc: `「冒險者，這一杯我請你，跟我說說你的故事吧。」 \n
          一把弓、一把破舊的琴、一壺烈酒。流浪的吟遊詩人，風塵僕僕，笑容黯淡；他四處探尋奇聞軼事，或是聆聽市井之聲。

          為何此行？詩人笑而不語。或許只有在無盡的漂泊中，他才能尋得那名為「活著」的餘溫。`,
    img: getImage('8.png'),
  },
  {
    id: 9,
    //貓蟲
    name: '魯加族',
    desc: `「喂，你今天上過潮風亭了嗎？」\n
            流淌著海盜的熱血，
            曾以為大海是唯一的追求；直到登上潮風亭，才發現真正的高度不在桅杆之上。

            拋棄了世俗的喧囂，
            我以這片蒼穹下的巔峰為家。

            我是跨越重洋而來的求道者，
            在黃金港最高處，靜候下一個能與我共賞美景的挑戰者。`,
    img: getImage('10.png'),
  },
  {
    id: 10,
    //索爾恩
    name: '維艾拉族',
    desc: `各位觀眾，請看——
          那修長的身型、靈動卻又敏感的雙耳；
          矯捷的身手，讓他在夜晚中迅速穿梭。

          銳利的雙眼，帶著泯滅一切的氣勢。

          請小心，
          一不注意的話，
          就會被他狙中你的心。`,
    img: getImage('9.png'),
  },
  {
    id: 11,
    //lnu
    name: '貓魅族',
    desc: `Inu，作為貓男俱樂部的貓老大，他代表著俱樂部參賽，來提醒大家——
          兔男並不是唯一的選擇。別忘了，兔男出生前，是誰在掌管這個世界。

          然後，如果你喜歡狗，但又沒時間去照顧牠，比如說遛狗之類的，那怎麼辦呢？

          答案就是：養一隻跟狗有著一樣性格的貓。

          除了偶爾還是會伸爪哈氣，
          還有會突然變回貓一樣高冷、不理人。

          沒錯，就在這裡——
          這隻紅色貓。

          他會自己上廁所、會自己洗澡，還會做飯。
          有人要領養他嗎？`,
    img: getImage('11.png'),
  },
  {
    id: 12,
    //伊萊諾斯
    name: '維艾拉族',
    desc: `不論種族、性別，都會喜歡他——
絕對的自信、偶像風範的王者！

溫柔紳士的另外一面，卻是任性、會用眼淚示弱撒嬌的小惡魔。
他的目標，是讓艾奧傑亞的粉絲們每天都能感到幸福。

不論是糖果，或者是鞭子，
只要是粉絲的願望，他都會努力達成——
天生的偶像！

「想要成為偶像，穿上好看的衣服、認識有趣的人，希望能看見大家的笑容。
在這之前，也許你不認識我；但從今天開始，我會努力成為能被你喜愛的人！」

他的座右銘是：
偶像與粉絲，是雙向的愛。

當粉絲在為他應援的時候，
他也在為粉絲們應援著。

「即使只記得名字也好，
請讓我成為你喜歡的偶像！」`,
    img: getImage('7.png'),
  },
  {
    id: 13,
    //咕嚕小貓
    name: '維艾拉族',
    desc: `「世界需要改變，這種變化來自內在。」

來自無望流民街，個性開朗，帶一點土性。

「第七靈災奪走了我的一切。」

他憎恨這個世界，也曾想過放棄人生；
在貧窮與飢餓之間掙扎，就像他長長的瀏海一樣，看不見未來。

不過，自從向吟遊詩人讓泰爾學習演奏樂器後，
音樂成為了他宣洩情感的出口。

他開始越來越喜歡自己，
心情也從陰天，慢慢變成晴天。

他想要給那個曾經很糟的自己，一個溫暖的擁抱。
所有的努力，都將帶著你，讓所有人刮目相看！`,
    img: getImage('13.png'),
  },
];


function App() {
  const [expanded, setExpanded] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className='bgsea'>
      <img src={getImage('logo.png')} alt="Logo" className="titlelogo" />
      <div width="1050px" height="50%" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="onepage-bg dark-bg">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={isMobile ? 3.1 : 3.2}
          
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 250,
              modifier: 1.5,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
          >
      {products.map((p) => (
              <SwiperSlide key={p.id}>
                {({ isActive }) => (
                  <Box
                    className={`card-swiper product-card-mui${isActive ? ' active' : ''}`}
                    sx={{
                      filter: isActive ? 'none' : 'grayscale(1)',
                      boxShadow: isActive
                        ? '0 8px 32px 0 rgba(255,255,255,0.25)'
                        : '0 4px 16px 0 rgba(0,0,0,0.25)',
                      background: isActive
                        ? 'linear-gradient(135deg, #2d2d2d 60%, #b71c1c 100%)'
                        : 'rgba(30,30,30,0.8)',
                      color: isActive ? '#fff' : '#bbb',
                      transition: 'all 0.3s',
                      p: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-end',
                      height: '100%',
                      borderRadius: '2.5rem',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      style={{
                        width: '100%',
                        height: '30%',
                        objectFit: 'cover',
                        borderRadius: '0 0 2.5rem 2.5rem',
                        marginBottom: 0,
                      }}
                    />
                    <Box
                      sx={{
                        p: 3,
                        textAlign: 'left',
                        minHeight: '150px',
                        position: 'relative',
                        zIndex: 2,
                      }}
                    >
                      <h4 style={{ fontSize: '1.5rem', margin: 0 }}>{p.name}</h4>
                      {/* 使用 CSS Grid 實現平滑展開/收合 */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateRows: expanded[p.id] ? '1fr' : '0fr',
                          transition: 'grid-template-rows 0.4s ease-in-out',
                        }}
                      >
                        <div style={{ overflow: 'hidden' }}>
                          <p
                            style={{
                              fontSize: '1rem',
                              margin: '0.5rem 0 0 0',
                              whiteSpace: 'pre-line',
                            }}
                          >
                            {p.desc}
                          </p>
                        </div>
                      </div>
                      {/* 預覽文字（摺疊時顯示） */}
                      {!expanded[p.id] && (
                        <p
                          style={{
                            fontSize: '1rem',
                            margin: '0.5rem 0 0 0',
                            whiteSpace: 'pre-line',
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitLineClamp: 4, // 摺疊時顯示3行
                            WebkitBoxOrient: 'vertical',
                          }}
                        >
                          {p.desc}
                        </p>
                      )}
                      {/* more/收起 按鈕（超過4行才顯示） */}
                      {(p.desc.split('\n').length > 4 || p.desc.length > 150) && (
                        <button
                          style={{
                            marginTop: 8,
                            background: 'rgba(0,0,0,0.3)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 8,
                            padding: '4px 14px',
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                          }}
                          onClick={() => toggleExpand(p.id)}
                        >
                          {expanded[p.id] ? '收起' : 'more'}
                        </button>
                      )}
                    </Box>
                    {/* <Box
                      sx={{
                        position: 'absolute',
                        right: 24,
                        bottom: 24,
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        // background: isActive ? '#fff' : '#222',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: isActive
                          ? '0 2px 8px 0 #b71c1c99'
                          : '0 1px 4px 0 #0008',
                        zIndex: 1,
                        pointerEvents: 'none',
                      }}
                    >
                      <span
                        style={{
                          fontSize: 28,
                          // color: isActive ? '#b71c1c' : '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <img src="/fish.png" alt="Fish" style={{ width: 80, height: 80 }} />
                      </span>
                    </Box> */}
                  </Box>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default App
