from django import template
from django.conf import settings

register = template.Library()


@register.filter
def paper_to_boxes(value):
    return round(value / settings.SHEETS_PER_PAPER_BOX, 2)
