document.addEventListener('DOMContentLoaded', function () {
    console.log('تم تحميل ملف blog.js بنجاح');

    // Function to update the status text and switch state
    function updatePostStatus(switchElement, isPublished) {
        const statusText = switchElement.closest('td').querySelector('small');
        if (isPublished) {
            switchElement.checked = true;
            statusText.textContent = 'تم النشر';
            statusText.className = 'text-success';
        } else {
            switchElement.checked = false;
            statusText.textContent = 'مسودة';
            statusText.className = 'text-muted';
        }
    }

    // Handle switch change events
    document.querySelectorAll('input[type="checkbox"][role="switch"]').forEach(switchElement => {
        switchElement.addEventListener('change', function () {
            const statusText = this.closest('td').querySelector('small');
            if (this.checked) {
                statusText.textContent = 'تم النشر';
                statusText.className = 'text-success';
            } else {
                statusText.textContent = 'مسودة';
                statusText.className = 'text-muted';
            }
        });
    });

    // Handle publish button click
    document.addEventListener('click', function (e) {
        // Check if the click is on a publish button
        if (e.target.closest('.dropdown-item.text-success')) {
            e.preventDefault();
            const switchElement = e.target.closest('tr').querySelector('input[type="checkbox"][role="switch"]');
            updatePostStatus(switchElement, true);
            // Close the dropdown
            const dropdown = e.target.closest('.dropdown-menu');
            if (dropdown) {
                const dropdownInstance = bootstrap.Dropdown.getInstance(dropdown);
                if (dropdownInstance) {
                    dropdownInstance.hide();
                }
            }
        }
        // Check if the click is on an unpublish button
        else if (e.target.closest('.dropdown-item.text-warning')) {
            e.preventDefault();
            const switchElement = e.target.closest('tr').querySelector('input[type="checkbox"][role="switch"]');
            updatePostStatus(switchElement, false);
            // Close the dropdown
            const dropdown = e.target.closest('.dropdown-menu');
            if (dropdown) {
                const dropdownInstance = bootstrap.Dropdown.getInstance(dropdown);
                if (dropdownInstance) {
                    dropdownInstance.hide();
                }
            }
        }
    });

    // Handle delete buttons
    const deleteButtons = document.querySelectorAll('a[data-bs-target="#delete-blog"]');
    console.log('تم العثور على', deleteButtons.length, 'زر حذف');

    deleteButtons.forEach((button, index) => {
        button.setAttribute('data-index', index);
        button.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('تم النقر على زر الحذف', this.getAttribute('data-index'));

            const postRow = this.closest('tr');
            if (!postRow) {
                console.error('لم يتم العثور على صف المقال');
                return;
            }
            const postTitle = postRow.querySelector('td:nth-child(3)')?.textContent || 'هذا المقال';

            if (confirm(`هل أنت متأكد من حذف المقال: ${postTitle}؟`)) {
                postRow.remove();
                console.log('تم حذف المقال بنجاح');
                const rows = document.querySelectorAll('tbody tr');
                rows.forEach((row, index) => {
                    const firstCell = row.cells[0];
                    if (firstCell) {
                        firstCell.textContent = index + 1;
                    }
                });
            }
        });
    });
});

new DataTable('#blogTable', {
    responsive: true,
    language: {
        "sProcessing": "جاري التحميل...",
        "sLengthMenu": "عرض _MENU_ سجل",
        "sZeroRecords": "لم يتم العثور على سجلات",
        "sInfo": "عرض _START_ إلى _END_ من _TOTAL_ سجل",
        "sInfoEmpty": "عرض 0 إلى 0 من 0 سجل",
        "sInfoFiltered": "(تصفية من _MAX_ إجمالي السجلات)",
        "sSearch": "بحث",
        "oPaginate": {
            "sFirst": "الأول",
            "sPrevious": "السابق",
            "sNext": "التالي",
            "sLast": "الأخير"
        },
        "emptyTable": "لا توجد بيانات متاحة في الجدول",
        "loadingRecords": "جاري التحميل...",
        "search": "بحث",
        "searchPlaceholder": "ابحث..."
    },
    buttons: [
        {
            extend: 'copy',
            text: 'نسخ'
        },
        {
            extend: 'excel',
            text: 'إكسيل'
        },
        {
            extend: 'pdf',
            text: 'PDF'
        },
        {
            extend: 'print',
            text: 'طباعة'
        }
    ],
    layout: {
        topStart: 'buttons'
    },
    dom: "<'row'<'col-sm-12 col-md-6'B><'col-sm-12 col-md-6'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
    scrollX: false,
    autoWidth: false,
    pageLength: 10,
    lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, 'الكل']],
    order: [[0, 'asc']]
});