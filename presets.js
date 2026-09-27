/**
 * プリセット旋律データ（任意）
 *
 * このファイルは読み込まれなくてもアプリは動作します。
 * 存在しない場合は「プリセット」ボタンが表示されなくなるだけです。
 *
 * 注意: 以下のデータは既存楽曲の冒頭旋律を採譜したものです。
 *       公開・再配布する場合は権利関係を確認し、必要なら本ファイルを削除してください。
 */
// --- Preset melodies (採譜データ) ---
// Each note: { pitch, step (16th-note grid position), duration (in 16th notes) }
// q=4, e=2, dq=6, h=8, w=16
window.MELODY_PRESETS = {
    // 千本桜（黒うさP）— Re Fa Sol La Do (Re) (from 千本桜.mid Track 0)
    'scale1': { title: '千本桜', notes: [
        // m1: rest(dq) D4(e) F4(e)
        { pitch: 'D4', step: 12, duration: 2 },
        { pitch: 'F4', step: 14, duration: 2 },
        // m2: G4(de) G4(de) A4(s) A4(dq) A4(s)
        { pitch: 'G4', step: 16, duration: 3 },
        { pitch: 'G4', step: 19, duration: 3 },
        { pitch: 'A4', step: 22, duration: 1 },
        { pitch: 'A4', step: 24, duration: 6 },
        { pitch: 'A4', step: 30, duration: 1 },
        // m3: C5(e) D5(e) G4(e) F4(e) A4(e) rest(e) D4(e) F4(e)
        { pitch: 'C5', step: 32, duration: 2 },
        { pitch: 'D5', step: 34, duration: 2 },
        { pitch: 'G4', step: 36, duration: 2 },
        { pitch: 'F4', step: 38, duration: 2 },
        { pitch: 'A4', step: 40, duration: 2 },
        { pitch: 'D4', step: 44, duration: 2 },
        { pitch: 'F4', step: 46, duration: 2 },
        // m4: G4(de) G4(de) A4(s) A4(dq) A4(s)
        { pitch: 'G4', step: 48, duration: 3 },
        { pitch: 'G4', step: 51, duration: 3 },
        { pitch: 'A4', step: 54, duration: 1 },
        { pitch: 'A4', step: 56, duration: 6 },
        { pitch: 'A4', step: 62, duration: 1 },
        // m5: A#4(e) A4(e) G4(e) F4(e) F4(e) rest(e) D4(e) F4(e)
        { pitch: 'A#4', step: 64, duration: 2 },
        { pitch: 'A4', step: 66, duration: 2 },
        { pitch: 'G4', step: 68, duration: 2 },
        { pitch: 'F4', step: 70, duration: 2 },
        { pitch: 'F4', step: 72, duration: 2 },
        { pitch: 'D4', step: 76, duration: 2 },
        { pitch: 'F4', step: 78, duration: 2 },
        // m6: G4(de) G4(de) A4(s) A4(dq) A4(s)
        { pitch: 'G4', step: 80, duration: 3 },
        { pitch: 'G4', step: 83, duration: 3 },
        { pitch: 'A4', step: 86, duration: 1 },
        { pitch: 'A4', step: 88, duration: 6 },
        { pitch: 'A4', step: 94, duration: 1 },
        // m7: C5(e) D5(e) G4(e) F4(e) A4(e) rest(e) D4(e) F4(e)
        { pitch: 'C5', step: 96, duration: 2 },
        { pitch: 'D5', step: 98, duration: 2 },
        { pitch: 'G4', step: 100, duration: 2 },
        { pitch: 'F4', step: 102, duration: 2 },
        { pitch: 'A4', step: 104, duration: 2 },
        { pitch: 'D4', step: 108, duration: 2 },
        { pitch: 'F4', step: 110, duration: 2 },
        // m8: A#4(e) A4(e) G4(e) F4(e) G4(s) F4(s) A4(s) C5(s) D5(q)
        { pitch: 'A#4', step: 112, duration: 2 },
        { pitch: 'A4', step: 114, duration: 2 },
        { pitch: 'G4', step: 116, duration: 2 },
        { pitch: 'F4', step: 118, duration: 2 },
        { pitch: 'G4', step: 120, duration: 1 },
        { pitch: 'F4', step: 121, duration: 1 },
        { pitch: 'A4', step: 122, duration: 1 },
        { pitch: 'C5', step: 123, duration: 1 },
        { pitch: 'D5', step: 124, duration: 4 },
    ]},
    // 第９交響曲（Beethoven）"歓喜の歌" — Do Re Mi Fa Sol
    'scale2': { title: '歓喜の歌（第９）', notes: [
        // m1: E E F G
        { pitch: 'E4', step: 0, duration: 4 },
        { pitch: 'E4', step: 4, duration: 4 },
        { pitch: 'F4', step: 8, duration: 4 },
        { pitch: 'G4', step: 12, duration: 4 },
        // m2: G F E D
        { pitch: 'G4', step: 16, duration: 4 },
        { pitch: 'F4', step: 20, duration: 4 },
        { pitch: 'E4', step: 24, duration: 4 },
        { pitch: 'D4', step: 28, duration: 4 },
        // m3: C C D E
        { pitch: 'C4', step: 32, duration: 4 },
        { pitch: 'C4', step: 36, duration: 4 },
        { pitch: 'D4', step: 40, duration: 4 },
        { pitch: 'E4', step: 44, duration: 4 },
        // m4: E. D D-
        { pitch: 'E4', step: 48, duration: 6 },
        { pitch: 'D4', step: 54, duration: 2 },
        { pitch: 'D4', step: 56, duration: 8 },
        // m5: E E F G
        { pitch: 'E4', step: 64, duration: 4 },
        { pitch: 'E4', step: 68, duration: 4 },
        { pitch: 'F4', step: 72, duration: 4 },
        { pitch: 'G4', step: 76, duration: 4 },
        // m6: G F E D
        { pitch: 'G4', step: 80, duration: 4 },
        { pitch: 'F4', step: 84, duration: 4 },
        { pitch: 'E4', step: 88, duration: 4 },
        { pitch: 'D4', step: 92, duration: 4 },
        // m7: C C D E
        { pitch: 'C4', step: 96, duration: 4 },
        { pitch: 'C4', step: 100, duration: 4 },
        { pitch: 'D4', step: 104, duration: 4 },
        { pitch: 'E4', step: 108, duration: 4 },
        // m8: D. C C-
        { pitch: 'D4', step: 112, duration: 6 },
        { pitch: 'C4', step: 118, duration: 2 },
        { pitch: 'C4', step: 120, duration: 8 },
    ]},
    // 夜の踊り子（サカナクション）— ソ ラ シ ド レ (from yorunoodoriko.mid Track 0)
    'scale3': { title: '夜の踊り子', notes: [
        // m1: G(e) G(e) G(e) G(e) rest(e) G(e) rest(e) G(e)
        { pitch: 'G4', step: 0, duration: 2 },
        { pitch: 'G4', step: 2, duration: 2 },
        { pitch: 'G4', step: 4, duration: 2 },
        { pitch: 'G4', step: 6, duration: 2 },
        { pitch: 'G4', step: 10, duration: 2 },
        { pitch: 'G4', step: 14, duration: 2 },
        // m2: G(e) G(e) G(e) G(e) rest
        { pitch: 'G4', step: 18, duration: 2 },
        { pitch: 'G4', step: 22, duration: 2 },
        { pitch: 'G4', step: 24, duration: 2 },
        { pitch: 'G4', step: 26, duration: 2 },
        { pitch: 'A4', step: 28, duration: 2 },
        { pitch: 'B4', step: 30, duration: 2 },
        // m3: rest(e) G(e) G(e) G(e) rest(e) G(e) rest(e) G(e)
        { pitch: 'G4', step: 34, duration: 2 },
        { pitch: 'G4', step: 36, duration: 2 },
        { pitch: 'G4', step: 38, duration: 2 },
        { pitch: 'G4', step: 42, duration: 2 },
        { pitch: 'G4', step: 46, duration: 2 },
        // m4: G(e) G(e) G(e) G(e) rest
        { pitch: 'G4', step: 50, duration: 2 },
        { pitch: 'G4', step: 54, duration: 2 },
        { pitch: 'G4', step: 58, duration: 2 },
        { pitch: 'A4', step: 60, duration: 2 },
        { pitch: 'B4', step: 62, duration: 2 },
        // m5: rest(e) G(e) G(e) G(e) rest(e) G(e) rest(e) G(e)
        { pitch: 'G4', step: 66, duration: 2 },
        { pitch: 'G4', step: 68, duration: 2 },
        { pitch: 'G4', step: 70, duration: 2 },
        { pitch: 'G4', step: 74, duration: 2 },
        { pitch: 'G4', step: 78, duration: 2 },
        // m6: G(e) G(e) G(e) G(e) A(e) B(e)
        { pitch: 'G4', step: 82, duration: 2 },
        { pitch: 'G4', step: 86, duration: 2 },
        { pitch: 'G4', step: 90, duration: 2 },
        { pitch: 'A4', step: 92, duration: 2 },
        { pitch: 'B4', step: 94, duration: 2 },
        // m7: rest(q) D5(e) C5(e) rest(e) B4(e) rest(e) G4(e)
        { pitch: 'D5', step: 100, duration: 2 },
        { pitch: 'C5', step: 102, duration: 2 },
        { pitch: 'B4', step: 106, duration: 2 },
        { pitch: 'G4', step: 110, duration: 2 },
        // m8: rest(q) D5(e) C5(e) rest(e) B4(e) rest(e) G4(e)
        { pitch: 'D5', step: 116, duration: 2 },
        { pitch: 'C5', step: 118, duration: 2 },
        { pitch: 'B4', step: 122, duration: 2 },
        { pitch: 'G4', step: 126, duration: 2 },
    ]},
    // 打ち上げ花火（DAOKO×米津玄師）(from uchiagehanabi.mid Track 0)
    'scale4': { title: '打ち上げ花火', notes: [
        // m1: rest(dq) A#4(e) C#5(s) A#4(s)
        { pitch: 'A#4', step: 12, duration: 2 },
        { pitch: 'C#5', step: 14, duration: 1 },
        { pitch: 'A#4', step: 15, duration: 1 },
        // m2: G#4(e) F#4(e) D#4(s) F#4(e) G#4(dq+s) A#4(e) C#5(s) A#4(s)
        { pitch: 'G#4', step: 16, duration: 2 },
        { pitch: 'F#4', step: 18, duration: 2 },
        { pitch: 'D#4', step: 20, duration: 1 },
        { pitch: 'F#4', step: 21, duration: 2 },
        { pitch: 'G#4', step: 23, duration: 5 },
        { pitch: 'A#4', step: 28, duration: 2 },
        { pitch: 'C#5', step: 30, duration: 1 },
        { pitch: 'A#4', step: 31, duration: 1 },
        // m3: G#4(e) F#4(e) D#4(s) F#4(e) F#4(dq+s)
        { pitch: 'G#4', step: 32, duration: 2 },
        { pitch: 'F#4', step: 34, duration: 2 },
        { pitch: 'D#4', step: 36, duration: 1 },
        { pitch: 'F#4', step: 37, duration: 2 },
        { pitch: 'F#4', step: 39, duration: 5 },
        // m4: A#4(e) C#5(s) A#4(s) G#4(q) A#4(s) C#5(e) C#5(de) D#5(e) C#5(s) B4(s) A#4(e)
        { pitch: 'A#4', step: 44, duration: 2 },
        { pitch: 'C#5', step: 46, duration: 1 },
        { pitch: 'A#4', step: 47, duration: 1 },
        { pitch: 'G#4', step: 48, duration: 4 },
        { pitch: 'A#4', step: 52, duration: 1 },
        { pitch: 'C#5', step: 53, duration: 2 },
        { pitch: 'C#5', step: 55, duration: 3 },
        { pitch: 'D#5', step: 58, duration: 2 },
        { pitch: 'C#5', step: 60, duration: 1 },
        { pitch: 'B4', step: 61, duration: 1 },
        { pitch: 'A#4', step: 62, duration: 2 },
        // m5: A#4(dh+e)
        { pitch: 'A#4', step: 64, duration: 10 },
        // m6: rest(q) A#4(e) C#5(s) A#4(s)
        { pitch: 'A#4', step: 76, duration: 2 },
        { pitch: 'C#5', step: 78, duration: 1 },
        { pitch: 'A#4', step: 79, duration: 1 },
        // m6cont: G#4(e) F#4(e) D#4(s) F#4(e) G#4(dq+s) A#4(e) C#5(s) A#4(s)
        { pitch: 'G#4', step: 80, duration: 2 },
        { pitch: 'F#4', step: 82, duration: 2 },
        { pitch: 'D#4', step: 84, duration: 1 },
        { pitch: 'F#4', step: 85, duration: 2 },
        { pitch: 'G#4', step: 87, duration: 5 },
        { pitch: 'A#4', step: 92, duration: 2 },
        { pitch: 'C#5', step: 94, duration: 1 },
        { pitch: 'A#4', step: 95, duration: 1 },
        // m7: rest(s) G#4(s) F#4(e) D#4(s) F#4(e) F#4(dq+s)
        { pitch: 'G#4', step: 97, duration: 1 },
        { pitch: 'F#4', step: 98, duration: 2 },
        { pitch: 'D#4', step: 100, duration: 1 },
        { pitch: 'F#4', step: 101, duration: 2 },
        { pitch: 'F#4', step: 103, duration: 5 },
        // m7end: F#4(s) F4(s) D#4(s) F4(s) D#4(q) G#4(q) F4(e) C#4(e) F4(e) F4(q)
        { pitch: 'F#4', step: 108, duration: 1 },
        { pitch: 'F4', step: 109, duration: 1 },
        { pitch: 'D#4', step: 110, duration: 1 },
        { pitch: 'F4', step: 111, duration: 1 },
        { pitch: 'D#4', step: 112, duration: 4 },
        { pitch: 'G#4', step: 116, duration: 4 },
        { pitch: 'F4', step: 120, duration: 2 },
        { pitch: 'C#4', step: 122, duration: 2 },
        { pitch: 'F4', step: 124, duration: 2 },
        { pitch: 'F4', step: 126, duration: 4 },
    ]},
};
