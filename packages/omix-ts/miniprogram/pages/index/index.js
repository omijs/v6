"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("../../utils/create");
var index_1 = require("../../store/index");
var app = getApp();
create_1.default(index_1.default, {
    use: [
        'motto',
        'userInfo',
        'hasUserInfo',
        'canIUse'
    ],
    computed: {
        reverseMotto: function () {
            return this.motto.split('').reverse().join('');
        }
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        });
    },
    onLoad: function () {
        var _this = this;
        if (app.globalData.userInfo) {
            this.store.data.userInfo = app.globalData.userInfo;
            this.store.data.hasUserInfo = true;
        }
        else if (this.data.canIUse) {
            app.userInfoReadyCallback = function (res) {
                _this.store.data.userInfo = res;
                _this.store.data.hasUserInfo = true;
            };
        }
        else {
            wx.getUserInfo({
                success: function (res) {
                    app.globalData.userInfo = res.userInfo;
                    _this.store.data.userInfo = res.userInfo;
                    _this.store.data.hasUserInfo = true;
                }
            });
        }
        setTimeout(function () {
            _this.store.data.logs.push('abc');
            _this.store.data.motto = '123456';
        }, 1000);
        setTimeout(function () {
            _this.store.data.motto = 'abcdefg';
        }, 2000);
    },
    getUserInfo: function (e) {
        this.store.data.userInfo = e.detail.userInfo;
        this.store.data.hasUserInfo = true;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUF1QztBQUN2QywyQ0FBcUM7QUFLckMsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFFNUIsZ0JBQU0sQ0FBQyxlQUFLLEVBQUU7SUFDWixHQUFHLEVBQUU7UUFDSCxPQUFPO1FBQ1AsVUFBVTtRQUNWLGFBQWE7UUFDYixTQUFTO0tBQ1Y7SUFDRCxRQUFRLEVBQUU7UUFDUixZQUFZO1lBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDaEQsQ0FBQztLQUNGO0lBRUQsV0FBVztRQUNULEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUFOLGlCQStCQztRQTlCQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQTtZQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO1NBRW5DO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUc1QixHQUFHLENBQUMscUJBQXFCLEdBQUcsVUFBQSxHQUFHO2dCQUM3QixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFBO2dCQUM5QixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO1lBQ3BDLENBQUMsQ0FBQTtTQUNGO2FBQU07WUFFTCxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0JBQ1YsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtvQkFDdEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7b0JBQ3ZDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7Z0JBQ3BDLENBQUM7YUFDRixDQUFDLENBQUE7U0FDSDtRQUVELFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDaEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQTtRQUNsQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFUixVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFBO1FBQ25DLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFRCxXQUFXLFlBQUMsQ0FBTTtRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtJQUVwQyxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZSBmcm9tICcuLi8uLi91dGlscy9jcmVhdGUnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvaW5kZXgnXG5cbi8v6I635Y+W5bqU55So5a6e5L6LXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXG5cbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcblxuY3JlYXRlKHN0b3JlLCB7XG4gIHVzZTogW1xuICAgICdtb3R0bycsXG4gICAgJ3VzZXJJbmZvJyxcbiAgICAnaGFzVXNlckluZm8nLFxuICAgICdjYW5JVXNlJ1xuICBdLFxuICBjb21wdXRlZDoge1xuICAgIHJldmVyc2VNb3R0bygpIHtcbiAgICAgIHJldHVybiB0aGlzLm1vdHRvLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJylcbiAgICB9XG4gIH0sXG4gIC8v5LqL5Lu25aSE55CG5Ye95pWwXG4gIGJpbmRWaWV3VGFwKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbG9ncy9sb2dzJ1xuICAgIH0pXG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgIHRoaXMuc3RvcmUuZGF0YS51c2VySW5mbyA9IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgICB0aGlzLnN0b3JlLmRhdGEuaGFzVXNlckluZm8gPSB0cnVlXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKSB7XG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuICAgICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IHJlcyA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGF0YS51c2VySW5mbyA9IHJlc1xuICAgICAgICB0aGlzLnN0b3JlLmRhdGEuaGFzVXNlckluZm8gPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICB0aGlzLnN0b3JlLmRhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICB0aGlzLnN0b3JlLmRhdGEuaGFzVXNlckluZm8gPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRhdGEubG9ncy5wdXNoKCdhYmMnKVxuICAgICAgdGhpcy5zdG9yZS5kYXRhLm1vdHRvID0gJzEyMzQ1NidcbiAgICB9LCAxMDAwKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRhdGEubW90dG8gPSAnYWJjZGVmZydcbiAgICB9LCAyMDAwKVxuICB9LFxuXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xuICAgIHRoaXMuc3RvcmUuZGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG4gICAgdGhpcy5zdG9yZS5kYXRhLmhhc1VzZXJJbmZvID0gdHJ1ZVxuXG4gIH1cbn0pXG4iXX0=