window.onload = function() {
    var actions = ['politics', 'sports', 'economics', 'health', 'weather'];
  
    $(document).ready(function() {
      actions.forEach(function(action) {
        $('#' + action).click(function() {
          $.ajax({
            url: 'http://localhost/news-website-backend/backend.php',
            type: 'POST',
            data: { tag: action },
            success: function(response) {
              var articles = JSON.parse(response);
              var heroSection = '';
              heroSection += '<img src=' + articles[0].image_url + ' alt=""></img>';
              heroSection += '<h2 class="title">' + articles[0].title + '</h2>';
              heroSection += '<p class="content">' + articles[0].content + '</p>';
              $('#left').html(heroSection);
              var articlesHtml = '';
              for (var i = 1; i < articles.length; i++) {
                articlesHtml += '<div class="card">';
                articlesHtml += '<div class="card-text">';
                articlesHtml += '<h2>' + articles[i].title + '</h2>';
                articlesHtml += '<p>' + articles[i].content + '</p>';
                articlesHtml += '<div class="author-date">';
                articlesHtml += '<span>' + articles[i].author + ' - ' + '</span>';
                articlesHtml += '<span>' + articles[i].date_published + '</span>';
                articlesHtml += '</div>';
                articlesHtml += '</div>';
                articlesHtml += '<div><img src=' + articles[i].image_url + ' alt=""></div>';
                articlesHtml += '</div>';
              }
              $('#mid-section').html(articlesHtml);
            }
          });
        });
      });
    });
  };
  