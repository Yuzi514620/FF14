import React, { useState } from "react";
import { Box, Typography, Link, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

const CompanyFooter = () => {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);
  const images = import.meta.glob('../assets/*.png', { eager: true })
  const getImage = (name) => images[`../assets/${name}`]?.default
  const handleOpenDisclaimer = () => setDisclaimerOpen(true);
  const handleCloseDisclaimer = () => setDisclaimerOpen(false);

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0f172a",
        color: "#cbd5e1",
        pt: { xs: 4, md: 8 },
        pb: { xs: 3, md: 4 },
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto', px: { xs: 2, md: 3 }, textAlign: 'center' }}>
        
        {/* 上半部 */}
        <Grid 
          container 
          spacing={{ xs: 3, md: 4 }} 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            gap: { xs: 2, md: 10 },
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >

          {/* 聯絡資訊 */}
          <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: "#fff", 
                mb: { xs: 1, md: 2 },
                fontSize: { xs: '0.9rem', md: '1rem' },
              }}
            >
              加入我們
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Link href="https://discord.gg/KWJcnVmX4H" underline="hover" color="inherit" target="_blank"
  rel="noopener noreferrer">
                <img 
                  src={getImage('discord.png')} 
                  alt="Discord" 
                  style={{ width: 80, verticalAlign: 'middle' }} 
                />
              </Link>
            </Box>
          </Grid>

          {/* 社群 */}
          <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: "#fff", 
                mb: { xs: 1, md: 2 },
                fontSize: { xs: '0.9rem', md: '1rem' },
              }}
            >
              追蹤最新消息
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Link href="https://www.threads.com/@miko.sayuri?hl=zh-tw" underline="hover" color="inherit" target="_blank"
  rel="noopener noreferrer">
                <img 
                  src={getImage('threads.png')} 
                  alt="Threads" 
                  style={{ width: 80, verticalAlign: 'middle' }} 
                />
              </Link>
            </Box>
          </Grid>
          {/* 公司資訊 */}
          <Grid item xs={12} md={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: "#fff", 
                mb: { xs: 1, md: 2 },
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              咪子娛樂股份有限公司
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                lineHeight: 1.8,
                fontSize: { xs: '0.85rem', md: '0.875rem' },
              }}
            >
              成名作品為《男偶之夜》，
              <br />
              男偶之夜2 敬請期待。
              <br />
              誠徵節目贊助廠商
              <br />
              <Link 
                component="button"
                underline="always" 
                color="inherit"
                onClick={handleOpenDisclaimer}
                sx={{ 
                  cursor: 'pointer',
                  fontSize: 'inherit',
                  verticalAlign: 'baseline',
                  textDecorationColor: '#cbd5e1',
                }}
              >
                免責聲明
              </Link>
            </Typography>
          </Grid>
        </Grid>

        {/* 免責聲明彈窗 */}
        <Dialog 
          open={disclaimerOpen} 
          onClose={handleCloseDisclaimer}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              backgroundColor: '#1e293b',
              color: '#cbd5e1',
              borderRadius: 2,
            }
          }}
        >
          <DialogTitle sx={{ color: '#fff', fontWeight: 'bold' }}>
            免責聲明
          </DialogTitle>
          <DialogContent dividers sx={{ borderColor: '#334155' }}>
            <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 'bold', mb: 1 }}>
              著作權聲明
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
              本站所有同人遊戲、圖片、文字等內容，其原始角色、劇情、世界觀及相關商標之著作權皆屬原著作權人所有。本站內容均為基於原作之「二次創作」，與原作者、出版商、遊戲製作公司無關。
            </Typography>

            <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 'bold', mb: 1 }}>
              非盈利性質
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
              本站遊戲僅供粉絲交流與研究，不具商業營利目的。若有引用部分素材，皆僅用於同人創作展示。
            </Typography>

            <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 'bold', mb: 1 }}>
              內容免責
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
              本站對所分享的遊戲內容之準確性、合法性、完整性不作任何保證。使用者在使用本站內容時應自行判斷，本站對因使用本站內容而產生的任何直接或間接損失不承擔任何法律責任。
            </Typography>

            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
              若本站內容侵犯了您的著作權或權益，請隨時聯絡本站管理員，我們將在確認後立即刪除相關內容。
            </Typography>
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Button 
              onClick={handleCloseDisclaimer} 
              variant="contained"
              sx={{ 
                backgroundColor: '#b71c1c',
                '&:hover': { backgroundColor: '#d32f2f' }
              }}
            >
              關閉
            </Button>
          </DialogActions>
        </Dialog>

        {/* 分隔線 */}
        <Box
          sx={{
            borderTop: "1px solid #334155",
            mt: { xs: 4, md: 6 },
            pt: { xs: 2, md: 3 },
            textAlign: "center",
          }}
        >
          <Typography 
            variant="body2"
            sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
          >
            © {new Date().getFullYear()} 咪子娛樂股份有限公司 All Rights
            Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyFooter;