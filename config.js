/* الإعدادات المشتركة: الأسعار والألوان والأشكال (تنقرأ في الصفحة الرئيسية وصفحة التصميم) */
const CONFIG = {
  currency: "ر.س",
  maxLetters: 12,
  // رقم واتساب المتجر بالصيغة الدولية بدون + ولا مسافات (مثال: 9665XXXXXXXX)
  whatsapp: "966567466167",
  // طرق التوصيل وأسعارها (عدّليها حسب شركة الشحن عندك)
  shipping: [
    { id:"ship",   label:"شحن لكل مدن المملكة", note:"يوصلك خلال ٢ إلى ٤ أيام بعد التجهيز", price:25 },
  ],
  // شحن مجاني إذا تعدّى سعر الحروف هذا المبلغ (حطي 0 لإلغائه)
  freeShippingOver: 200,
  sizes: [
    { id:"10", cm:10, pricePerLetter:15 },
    { id:"12", cm:12, pricePerLetter:20 },
    { id:"15", cm:15, pricePerLetter:30 },
  ],
  textures: [
    { id:"smooth", label:"ناعم" },
    { id:"knit",   label:"مخيوط" },
  ],
  colors: [
    { name:"أبيض",       hex:"#f6f6f3" },
    { name:"أبيض عظمي",  hex:"#ece4cf" },
    { name:"بلوط",       hex:"#d8bf94" },
    { name:"بني قهوة",   hex:"#4e2b1f" },
    { name:"رمادي",      hex:"#6d6d70" },
    { name:"أسود",       hex:"#1c1b1d" },
    { name:"أحمر",       hex:"#d42a2f" },
    { name:"زهري",       hex:"#f283b3" },
    { name:"ماجنتا",     hex:"#d4267f" },
    { name:"برتقالي",    hex:"#f08a1d" },
    { name:"أصفر",       hex:"#f4d62c" },
    { name:"أخضر",       hex:"#33bd4d" },
    { name:"أخضر زيتوني", hex:"#5b6b2f" },
    { name:"سماوي",      hex:"#3d94d8" },
    { name:"أزرق",       hex:"#1f46c8" },
  ],
  // الأشكال (السعر للقطعة الواحدة، عدّليه)
  shapes: [
    { id:"cloud", name:"غيمة", price:0, w:240, h:159 },
    { id:"rocket", name:"صاروخ", price:0, w:201, h:240 },
    { id:"dino", name:"ديناصور", price:0, w:239, h:240 },
    { id:"dolphin", name:"دولفين", price:0, w:240, h:226 },
    { id:"lion", name:"أسد", price:0, w:238, h:240 },
    { id:"boat", name:"قارب", price:0, w:240, h:189 },
    { id:"car", name:"سيارة", price:0, w:240, h:143 },
    { id:"leaf", name:"ورقة شجر", price:0, w:210, h:240 },
    { id:"octopus", name:"أخطبوط", price:0, w:240, h:220 },
    { id:"elephant", name:"فيل", price:0, w:240, h:163 },
    { id:"heart", name:"قلب", price:0, w:231, h:208 },
    { id:"flower", name:"وردة", price:0, w:240, h:240 },
    { id:"crown", name:"تاج", price:0, w:240, h:194 },
    { id:"castle", name:"قصر", price:0, w:240, h:193 },
    { id:"giraffe", name:"زرافة", price:0, w:137, h:240 },
    { id:"snake", name:"ثعبان", price:0, w:194, h:218 },
    { id:"bow", name:"فيونكة", price:0, w:231, h:151 },
    { id:"butterfly", name:"فراشة", price:0, w:231, h:195 },
    { id:"palm", name:"نخلة", price:0, w:191, h:240 },
  ],
  walls: ["#f1ece6","#e7dfd3","#f5e4e3","#e2ebef","#e5ebdf","#2b2829"],
  addons: [
    { id:"tape",  label:"لاصق جداري", note:"تعلّقينها بدون مسامير", price:6 },
    { id:"gift",  label:"تغليف هدية + كرت", note:"نكتب إهداءك على الكرت", price:10 },
  ],
};
